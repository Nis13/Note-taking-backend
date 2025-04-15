import express from "express";
import * as NoteController from "../module/note/note-controller";
import { authenticate, authorize } from "../middleware/auth";
import { validationMiddleware } from "../middleware/validator";
import { CreateNoteDto } from "../module/note/dto/create-note-dto";
import { UpdateNoteDto } from "../module/note/dto/update-note-dto";

const router = express();

router.get(
  "/",
  authenticate,
  authorize(["user", "admin"]),
  NoteController.getall
);
router.post(
  "/",
  authenticate,
  authorize(["user", "admin"]),
  validationMiddleware(CreateNoteDto),
  NoteController.create
);
router.get(
  "/:id",
  authenticate,
  authorize(["user", "admin"]),
  NoteController.getById
);
router.delete("/:id", NoteController.deleteById);
router.put(
  "/:id",
  authenticate,
  authorize(["user", "admin"]),
  validationMiddleware(UpdateNoteDto),
  NoteController.updateById
);

export default router;
