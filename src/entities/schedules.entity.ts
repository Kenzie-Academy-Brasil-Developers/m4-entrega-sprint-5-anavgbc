import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import Properties from "./properties.entity";
import User from "./user.entity";

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

  @ManyToOne(() => User)
  user: User;
}
export default Schedules;
