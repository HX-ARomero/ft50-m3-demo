import { Router } from "express";
import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Character } from "../entities/Character";

const characterRouter = Router();

characterRouter.post("/", async (request: Request, response: Response) => {
  const { name } = request.body;
  const character = new Character();
  character.name = name;

  const savedCharacter = await AppDataSource.manager.save(character);
  response.status(201).send(savedCharacter);
});
/* JSON para postear un nuevo Personaje:
{
  "name": "Mario"
}
*/

export default characterRouter;
