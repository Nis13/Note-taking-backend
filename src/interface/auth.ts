import { Request as ExpressRequest } from "express";
import { UserPayloadDTO } from "../module/auth/dto/payload-dto";

export interface Request extends ExpressRequest {
  user?: UserPayloadDTO;
}
