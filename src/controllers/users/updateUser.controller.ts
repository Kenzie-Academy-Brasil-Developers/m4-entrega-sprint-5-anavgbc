import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";
import User from "../../entities/user.entity";

const updateUserController = async (req: Request, res: Response) => {
  const update: IUserUpdate = req.body;
  const id = req.params.id;

  const userUpdated = await updateUserService(update, id);

  return res.status(200).json(userUpdated);
};
export default updateUserController;
