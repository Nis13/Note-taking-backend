import { validationMiddleware } from "../middleware/validator";
import { login, signup } from "../module/auth/auth-controller";
import express from "express";
import { LoginDTO } from "../module/auth/dto/login-dto";
import { SignupDTO } from "../module/auth/dto/signup-dto";

const router = express();

router.post("/login", validationMiddleware(LoginDTO), login);
router.post("/signup", validationMiddleware(SignupDTO), signup);

export default router;
