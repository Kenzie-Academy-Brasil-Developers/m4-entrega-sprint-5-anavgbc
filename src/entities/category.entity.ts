import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Properties from "./properties.entity";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60, nullable: false, unique: true })
  name: string;

  @OneToMany((type) => Properties, (property) => property.category)
  properties: Properties[];
}

export default Categories;
