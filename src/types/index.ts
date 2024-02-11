import { Request } from "express";
import { IUser } from "../models/user.model";

type ImageType = {
  url: string;
  public_Id: string;
};

interface RequestAuth extends Request {
  user?: Omit<IUser, "password">;
}

export type { ImageType, RequestAuth };
