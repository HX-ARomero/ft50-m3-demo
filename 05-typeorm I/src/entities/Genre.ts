import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "GENRES",
})
export class Genre {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  //* Genre N:N Videogame
  //? No es necesario declararla aquí
  //? Se declara en el Modelo Principal: Videogame
}
