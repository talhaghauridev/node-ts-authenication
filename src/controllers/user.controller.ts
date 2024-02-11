import asyncHandler from "../utils/asyncHandler";

const register = asyncHandler(async (req, res, next) => {
  const { name, email }: any = req.body;

  res.json({
    success: true,
    message: "Register successfully",
    user: name,
    email,
  });
});


export {
    register
}