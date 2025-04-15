import { Note } from "../../entities/note";
import { BaseRepo } from "../base/base-repo";
import { CreateNoteDto } from "./dto/create-note-dto";
import { NoteQuery } from "./dto/note-query";
import { UpdateNoteDto } from "./dto/update-note-dto";

export class NoteRepo extends BaseRepo {
  static readonly noteTable = this.db().getRepository(Note);

  static create(note: CreateNoteDto) {
    return this.noteTable.save(note);
  }

  static async getall(userId: string, query: NoteQuery) {
    const { title, categoryId } = query;

    const qb = this.noteTable
      .createQueryBuilder("note")
      .leftJoinAndSelect("note.categories", "category")
      .where("note.createdById = :userId", { userId });

    if (title) {
      qb.andWhere("(note.title ILIKE :search)", {
        search: `%${title}%`,
      });
    }

    if (categoryId) {
      qb.andWhere("category.id = :categoryId", { categoryId });
    }

    return qb.getMany();
  }

  static getById(id: string, userId: string) {
    return this.noteTable.findOne({
      where: {
        id,
        createdBy: { id: userId },
      },
      relations: ["categories"],
    });
  }

  static deleteById(id: string) {
    return this.noteTable.delete({ id });
  }

  static getByUserId(userId: string) {
    return this.noteTable.findBy({ createdBy: { id: userId } });
  }

  static updateById(id: string, note: UpdateNoteDto) {
    return this.noteTable.save({ id, ...note });
  }
}
