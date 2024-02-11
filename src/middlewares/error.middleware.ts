import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";

const errorMiddleware = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    statusCode: error.statusCode,
  });
};

export { errorMiddleware };
