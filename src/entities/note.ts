import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./user";
import { Base } from "../module/base/base";
import { Category } from "./category";

@Entity()
export class Note extends Base {
  @Column({ type: "text" })
  title: string;

  @Column({ type: "text", nullable: true })
  content: string;

  @ManyToOne(() => User)
  createdBy: User;

  @ManyToMany(() => Category)
  @JoinTable()
  categories?: Category[];
}
