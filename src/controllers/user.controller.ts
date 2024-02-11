import { IUser } from "../models/user.model";
import ApiError from "../utils/ApiError";
import asyncHandler from "../utils/asyncHandler";
import User from "../models/user.model";
import ApiResponse from "../utils/ApiResponse";



//Register User 
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password }: IUser = req.body;

  if (!name || !email || !password) {
    return next(new ApiError(400, "Please fill all fields"));
  }
  const existing = await User.findOne({ email });
  if (existing) {
    return next(new ApiError(402, "This email is already exist"));
  }

  const user = await User.create({ name, email, password });
  if (!user) {
    return next(new ApiError(400, "User creation error"));
  }

  res.json(new ApiResponse(200, user, "Register successfully"));
});


//Login User
const login = asyncHandler(async (req, res, next) => {
  const { email, password }:IUser = req.body;

  if (!email || !password) {
    return next(new ApiError(400, "Please provide both email and password"));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ApiError(401, "Invalid credentials"));
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    return next(new ApiError(401, "Invalid credentials"));
  }

  res.json(new ApiResponse(200, user, "Login successful"));
});

export { register,login };
