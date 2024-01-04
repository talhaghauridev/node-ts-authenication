import { NextFunction, Request, Response } from "express";
import { users } from "../data";

export const getALlData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {}
  throw new Error(`${"Error"}`);
};
