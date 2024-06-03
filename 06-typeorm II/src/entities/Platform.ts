import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videogame } from "./Videogame";

@Entity({
  name: "PLATFORMS",
})
export class Platform {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  //* Platform 1:N Videogame => OneToMany
  @OneToMany((type) => Videogame, (videogame) => videogame.platform)
  videogames!: Videogame[];
}

