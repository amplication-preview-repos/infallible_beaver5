import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  discordUserId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};