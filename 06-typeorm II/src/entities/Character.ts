import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "CHARACTERS",
})
export class Character {

  //* ENTITY LISTENER
  @BeforeInsert()
  transformTitle() {
    this.name = this.name.toUpperCase();
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  //* Character 1:1 Videogame
}
