// import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const profile = await userRepository.findOneBy({ id });

  if (!profile) {
    throw new AppError("User not found", 404);
  }

  if (!profile.isActive) {
    throw new AppError("User is already deleted", 400);
  }

  // if (!profile.isAdm) {
  //   throw new AppError("User must be adm", 403);
  // }
  //temporario

  await userRepository.update(id, {
    isActive: false,
  });

  return profile;
};
export default deleteUserService;
