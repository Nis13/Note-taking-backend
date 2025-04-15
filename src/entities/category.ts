import { Entity, Column, ManyToMany, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../module/base/base";
import { Note } from "./note";
import { User } from "./user";

@Entity()
export class Category extends Base {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Note)
  notes?: Note[];

  @ManyToOne(() => User)
  @JoinColumn()
  createdBy: User;
}
