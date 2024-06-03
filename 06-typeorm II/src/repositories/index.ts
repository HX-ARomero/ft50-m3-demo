import { AppDataSource } from "../config/data-source";
import { Character } from "../entities/Character";
import { Genre } from "../entities/Genre";
import { Platform } from "../entities/Platform";
import { Videogame } from "../entities/Videogame";

export const videogameRepository = AppDataSource.getRepository(
  Videogame
).extend({
  findByTitle(title: string) {
    return this.createQueryBuilder("videogame")
      .where("videogame.title = :title", { title })
      .getOne();
  },
});
export const platformRepository = AppDataSource.getRepository(Platform);
export const genreRepository = AppDataSource.getRepository(Genre);
export const characterRepository = AppDataSource.getRepository(Character);
