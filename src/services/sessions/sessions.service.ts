import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
const createSessionService = async (data: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: data.email,
  });

  if (!user) {
    throw new Error("Invalid user or password");
  }
  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid user or password");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,

    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};
export default createSessionService;
