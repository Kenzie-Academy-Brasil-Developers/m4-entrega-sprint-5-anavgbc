import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("adresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  zipCode: string;

  @Column()
  number: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;
}

export default Addresses;
