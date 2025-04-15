import { Role } from "../../../constant/enum/role";

export class UserPayloadDTO {
  id: string;
  role: Role;
  email: string;
}
