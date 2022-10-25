import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Schedules from "./schedules.entity";
import Schedules_users_properties from "./schedules.entity";
import { Exclude } from "class-transformer";
@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @OneToMany((type) => Schedules, (Schedules) => Schedules.user, {
    eager: true,
  })
  schedules: Schedules[];
}

export default User;
