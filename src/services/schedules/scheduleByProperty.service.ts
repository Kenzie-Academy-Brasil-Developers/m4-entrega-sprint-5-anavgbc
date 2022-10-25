import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";
import Schedules from "../../entities/schedules.entity";
import { AppError } from "../../errors/appError";

const scheduleByPropertyService = async (id: string) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getRepository(Schedules);

  const property = await propertyRepository.findOne({
    where: { id },
    relations: {
      schedules: true,
      // user: true
    },
  });

  if (!property) {
    throw new AppError("Invalid id", 404);
  }

  return property;
};
export default scheduleByPropertyService;
