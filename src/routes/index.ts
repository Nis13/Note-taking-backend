import express from "express";
import noteRoute from "./note";
import authRouter from "./auth";
import userRouter from "./user";
import categoryRoute from "./category";

const router = express();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/note", noteRoute);
router.use("/category", categoryRoute);

export default router;
