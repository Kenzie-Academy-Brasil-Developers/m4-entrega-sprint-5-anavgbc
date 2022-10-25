import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Properties from "./properties.entity";
import { v4 as uuid } from "uuid";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60, nullable: false, unique: true })
  name: string;

  @OneToMany((type) => Properties, (property) => property.category)
  properties: Properties[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Categories;
