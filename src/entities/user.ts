import { Entity, Column, OneToMany } from "typeorm";
import { Base } from "../module/base/base";
import { Note } from "./note";
import { Role } from "../constant/enum/role";

@Entity()
export class User extends Base {
  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ default: Role.USER })
  role: Role;

  @OneToMany(() => Note, (note) => note.createdBy)
  notes?: Note[];
}
