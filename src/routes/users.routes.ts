import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import ensureIsAdmMiddleware from "../middlewares/isAdmMiddleware";
import verifyAuthMiddleware from "../middlewares/verifyAuthMiddleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  verifyAuthMiddleware,
  ensureIsAdmMiddleware,
  listUserController
);
userRoutes.patch("/:id", verifyAuthMiddleware, updateUserController);
userRoutes.delete(
  "/:id",
  verifyAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteUserController
);

export default userRoutes;
