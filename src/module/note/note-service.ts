import { CategoryService } from "../category/category-service";
import { CreateNoteDto } from "./dto/create-note-dto";
import { NoteQuery } from "./dto/note-query";
import { UpdateNoteDto } from "./dto/update-note-dto";
import { NoteRepo } from "./note-repo";

export class NoteService {
  static async create(userId: string, note: CreateNoteDto) {
    const categories = note.categoryIds
      ? await CategoryService.findByIds(note.categoryIds)
      : [];
    const noteToCreate = {
      ...note,
      createdBy: userId,
      categories,
    };
    return await NoteRepo.create(noteToCreate);
  }

  static getall(userId: string, query: NoteQuery) {
    return NoteRepo.getall(userId, query);
  }

  static getById(id: string, userId: string) {
    return NoteRepo.getById(id, userId);
  }

  static getByUserId(userId: string) {
    return NoteRepo.getByUserId(userId);
  }

  static deleteById(id: string) {
    return NoteRepo.deleteById(id);
  }

  static async updateById(id: string, note: UpdateNoteDto) {
    const categories = note.categoryIds
      ? await CategoryService.findByIds(note.categoryIds)
      : [];
    const noteToUpdate = {
      ...note,
      categories,
    };
    return NoteRepo.updateById(id, noteToUpdate);
  }
}
