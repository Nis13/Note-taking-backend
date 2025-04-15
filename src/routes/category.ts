import { CreateCategoryDto } from "./../module/category/dto/create-category-dto";
import { validationMiddleware } from "./../middleware/validator";
import express from "express";
import * as CategoryController from "../module/category/category-controller";
import { authenticate } from "../middleware/auth";

const router = express();
router.get("/", authenticate, CategoryController.getAll);
router.get("/:id", authenticate, CategoryController.getById);
router.post(
  "/",
  authenticate,
  validationMiddleware(CreateCategoryDto),
  CategoryController.create
);

export default router;
