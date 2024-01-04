import { NextFunction, Request, Response } from "express";
import { users } from "../data";

export const getAllData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await users;
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Handle the error if needed
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
