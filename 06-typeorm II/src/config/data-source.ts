import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Videogame } from "../entities/Videogame";
import { Platform } from "../entities/Platform";
import { Genre } from "../entities/Genre";
import { Character } from "../entities/Character";
import { PlatformSubsciber } from "../subscribers";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  synchronize: false, //* EN FALSE EN PRODUCCIÓN
  dropSchema: false, //* EN FALSE EN PRODUCCIÓN
  entities: [Videogame, Platform, Genre, Character],
  subscribers: [PlatformSubsciber],
  migrations: [],
});
