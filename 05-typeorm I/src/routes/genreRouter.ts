import { Router } from "express";
import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Genre } from "../entities/Genre";

const genreRouter = Router();

genreRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    //* Construir objeto:
    const genre = new Genre();
    genre.name = name;

    //* Grbar en BBDD:
    const savedPlatform = await AppDataSource.manager.save(genre);
    res.status(201).send(savedPlatform);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el género" });
  }
});
/* JSON para postear un nuevo Género:
{
  "name": "Aventura"
}
*/

export default genreRouter;
