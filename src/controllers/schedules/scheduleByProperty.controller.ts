import { Request, Response } from "express";
import scheduleByPropertyService from "../../services/schedules/scheduleByProperty.service";

const scheduleByPropertyController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const scheduleProperties = await scheduleByPropertyService(id);

  return res.status(200).json(scheduleProperties);
};
export default scheduleByPropertyController;
