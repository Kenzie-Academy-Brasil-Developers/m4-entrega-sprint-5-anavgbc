import { Request, Response } from "express";
import User from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const userDeleted = await deleteUserService(id);

  return res.status(204).send();
};
export default deleteUserController;
