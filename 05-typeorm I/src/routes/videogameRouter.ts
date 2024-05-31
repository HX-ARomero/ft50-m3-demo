import { Router } from "express";
import { Request, Response } from "express";
import { Videogame } from "../entities/Videogame";
import { AppDataSource } from "../config/data-source";
import { Genre } from "../entities/Genre";
import { In } from "typeorm";

const videogameRouter = Router();

videogameRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      price,
      rating,
      releaseDate,
      platformId,
      genres,
      characterId,
    } = req.body;
    //* Generar un Array de instancias de "Genre":
    const genresArray = await AppDataSource.manager.findBy(Genre, {
      id: In(genres),
    });
    //* Construir objeto:
    const videogame = new Videogame();
    videogame.title = title;
    videogame.description = description;
    videogame.price = price;
    videogame.rating = rating;
    videogame.releaseDate = releaseDate;
    videogame.platformId = platformId;
    //* Asociamos los Géneros -> Array de Instancias:
    videogame.genres = genresArray;
    //* Asociamos al Character
    videogame.character = characterId;

    //* Grbar en BBDD:
    const savedVideogame = await AppDataSource.manager.save(videogame);
    res.status(201).send(savedVideogame);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el videogame" });
  }
});
//* PARA PODER CREAR EL VIDEOJUEGO DEBE EXISTIR:
//*   una plataforma, dos géneros y un personaje (para hacer las relaciones)
/* JSON para postear nuevo Videojuego:
{
  "title": "Super Mario Bros 1",
  "description": "Juego de plataforma",
  "price": 30,
  "rating": 9,
  "releaseDate": "1988 01 01",
  "platformId": 1,
  "genres": [1, 2],
  "characterId": 1
}
*/

videogameRouter.get("/", async (req: Request, res: Response) => {
  try {
    const videogames = await AppDataSource.manager.find(Videogame, {
      //* Traer también los datos de la Plataforma del Videojuego:
      relations: ["platform", "genres", "character"],
    });
    res.status(200).send(videogames);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener videogames" });
  }
});

export default videogameRouter;
