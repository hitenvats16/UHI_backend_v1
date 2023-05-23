import { Router } from "express";
import { createUser, searchUser } from "../database/controllers/user.js";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const type = req.query["type"] || "patient";
  const details = req.body;
  const { data, error } = await createUser(details, { type });
  if (error) {
    return res.status(400).json({
      error,
      data: null,
    });
  }
  return res.json({
    error: null,
    data,
  });
});

userRouter.post("/login", async (req, res) => {
  const { user_id, password } = req.body;
  const user = await searchUser({
    _id: user_id,
    password,
  });
  if (user) {
    return res.json({
      error: null,
      data: {
        token: user._id,
      },
    });
  }
  return res.status(401).json({
    data: null,
    error: {
      message: "incorrect id or pass",
    },
  });
});

export default userRouter;
