import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import Properties from "./properties.entity";
import User from "./user.entity";
import { v4 as uuid } from "uuid";

@Entity("schedules_users_properties")
class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date", nullable: false })
  date: string;

  @Column({ type: "time", nullable: false })
  hour: string;

  @ManyToOne(() => Properties)
  property: Properties;

  @ManyToOne(() => User, { eager: true })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export default Schedules;
