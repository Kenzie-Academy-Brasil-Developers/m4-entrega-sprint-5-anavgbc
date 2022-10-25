import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Addresses from "./addresses.entity";
import Categories from "./category.entity";
import Schedules from "./schedules_user_properties.entity";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "decimal", precision: 12, scale: 2, nullable: false })
  value: number;

  @Column({ default: false })
  sold: boolean;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses, { eager: true })
  @JoinColumn()
  address: Addresses;

  @OneToMany((type) => Schedules, (schedules) => schedules.property, {
    eager: true,
  })
  schedules: Schedules[];

  @ManyToOne((type) => Categories)
  category: Categories;
}

export default Properties;
