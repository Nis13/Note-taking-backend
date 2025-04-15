import express from "express";
import * as UserController from "../module/user/user-controller";
import { authenticate, authorize } from "../middleware/auth";
const router = express();

router.get("/", authenticate, authorize(["admin"]), UserController.getAll);

router.get(
  "/myProfile",
  authenticate,
  authorize(["admin", "user"]),
  UserController.getMyProfile
);

router.get("/:id", authenticate, authorize(["admin"]), UserController.getById);

router.put(
  "/:id",
  authenticate,
  authorize(["admin", "user"]),
  UserController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  UserController.deleteById
);

export default router;
