import { AppDataSource } from "../config/data-source";
import { Router } from "express";
import { Request, Response } from "express";
import { Videogame } from "../entities/Videogame";
import { Platform } from "../entities/Platform";
import { Genre } from "../entities/Genre";
import { In } from "typeorm";
import { Character } from "../entities/Character";
import { characterRepository, genreRepository, platformRepository, videogameRepository } from "../repositories";
const gamesRouter = Router();

//* REPOSITORIES
// const videogameRepository = AppDataSource.getRepository(Videogame);
// const platformRepository = AppDataSource.getMongoRepository(Platform);
// const genreRepository = AppDataSource.getRepository(Genre);
// const characterRepository = AppDataSource.getRepository(Character);

gamesRouter.post("/videogames", async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      releaseDate,
      rating,
      price,
      platformId,
      genres,
      characterId,
    } = req.body;

    //* TRANSACCIÓN
    const videogameTransaction = await AppDataSource.manager.transaction(
      "REPEATABLE READ",
      async (transactionalEntityManager) => {
        //* Generar un Array de instancias de "Genre":
        //* genres = [ 1, 2 ]
        const genresArray = await AppDataSource.manager.findBy(Genre, {
          id: In(genres),
        });

        const videogame = new Videogame();
        videogame.title = title;
        videogame.description = description;
        videogame.releaseDate = releaseDate;
        videogame.rating = rating;
        videogame.price = price;
        videogame.platform = platformId;
        //* Asociamos los Géneros -> Array de Instancias:
        videogame.genres = genresArray;
        //* Asociamos al Character
        videogame.character = characterId;

        //* Asignar nuevo valor a Inventory:
        const result = await transactionalEntityManager
          .createQueryBuilder()
          .select("MAX(videogame.inventory)", "inventory")
          .from(Videogame, "videogame")
          .getRawOne();
        videogame.inventory =
          result.inventory < 100 ? 100 : result.inventory + 2;

        const savedVideogame = await videogameRepository.save(videogame);
        return savedVideogame;
      }
    );

    res.status(201).send(videogameTransaction);
  } catch (error) {
    res.status(500).send({ error: "Error al guardar videojuego" });
  }
});

gamesRouter.get("/videogames", async (req: Request<{}, { title: string }, {}>, res: Response) => {
  try {
    const { title } = req.query;
    if(title) {
      const videogame = await videogameRepository.findByTitle(title.toString());
      res.status(200).send(videogame);
      return;
    }

    const videogames = await videogameRepository.find({
      relations: ["platform", "genres", "character"],
    });
    res.status(200).send(videogames);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener videogames" });
  }
});

gamesRouter.post("/platforms", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    //* Construir objeto:
    const platform = new Platform();
    platform.name = name;

    //* Grbar en BBDD:
    const savedPlatform = await platformRepository.save(platform);
    res.status(201).send(savedPlatform);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar plataforma" });
  }
});
/* JSON para postear nueva Plataforma:
{
  "name": "PlayStation 1"
}
*/

gamesRouter.post("/genres", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    //* Construir objeto:
    const genre = new Genre();
    genre.name = name;

    //* Grbar en BBDD:
    const savedPlatform = await genreRepository.save(genre);
    res.status(201).send(savedPlatform);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar género" });
  }
});
/* JSON para postear un nuevo Género:
{
  "name": "Aventura"
}
*/

gamesRouter.post(
  "/characters",
  async (request: Request, response: Response) => {
    const { name } = request.body;
    const character = new Character();
    character.name = name;

    const savedCharacter = await characterRepository.save(character);
    response.status(201).send(savedCharacter);
  }
);
/* JSON para postear un nuevo Personaje:
{
  "name": "Mario"
}
*/

export default gamesRouter;
