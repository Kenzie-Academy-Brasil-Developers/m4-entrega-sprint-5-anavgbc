import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";
import Schedules from "../../entities/schedules.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (scheduleData: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);
  const propertyRepository = AppDataSource.getRepository(Properties);
  const userRepository = AppDataSource.getRepository(User);

  const { date, hour, propertyId, userId } = scheduleData;

  const hourValidation = hour.split(":");

  if (Number(hourValidation[0]) < 8 || Number(hourValidation[0]) >= 18) {
    throw new AppError("Visits must happen between 8AM to 18PM");
  }

  const property = await propertyRepository.findOne({
    where: {
      id: propertyId,
    },
  });

  if (!property) {
    throw new AppError("No property found", 404);
  }
  const scheduleAlreadyExists = await scheduleRepository.findOneBy({
    date,
    hour,
  });

  if (scheduleAlreadyExists) {
    throw new AppError("No schedules avaliable. Try a new date or hour.");
  }

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const dayOfWeek = new Date(date).getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    throw new AppError("Schedules are only avaliable during the week");
  }

  const newSchedule = {
    hour,
    date,
    property: property,
    user: user!,
  };

  const createdSchedule = scheduleRepository.create(newSchedule);

  await scheduleRepository.save(createdSchedule);

  return createdSchedule;
};
export default createScheduleService;
