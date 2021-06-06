import { IsNotEmpty } from "class-validator";

export class JwtPayload {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  username: string;
}