import { NextFunction, Request, Response } from "express";

type AsyncHandler<T = void> = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<T>;

const asyncHandler =
  <T>(handler: AsyncHandler<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    return handler(req, res, next).catch(next);
  };

export default asyncHandler;
