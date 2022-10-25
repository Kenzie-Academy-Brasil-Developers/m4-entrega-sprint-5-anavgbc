import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleService from "../../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const scheduleData: IScheduleRequest = req.body;

  const newSchedule = await createScheduleService(scheduleData);

  return res.status(201).json(newSchedule);
};
export default createScheduleController;
