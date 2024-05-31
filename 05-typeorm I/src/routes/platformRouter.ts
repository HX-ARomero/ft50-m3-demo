import { Router } from "express";
import { Platform } from "../entities/Platform";
import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";

const platformRouter = Router();

platformRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    //* Construir objeto:
    const platform = new Platform();
    platform.name = name;

    //* Grbar en BBDD:
    const savedPlatform = await AppDataSource.manager.save(platform);
    res.status(201).send(savedPlatform);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el videogame" });
  }
});
/* JSON para postear nueva Plataforma:
{
  "name": "PlayStation 1"
}
*/

export default platformRouter;
