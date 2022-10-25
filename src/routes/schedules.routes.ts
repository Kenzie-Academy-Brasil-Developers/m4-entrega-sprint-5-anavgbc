import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedule.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuthMiddleware";

const scheduleRouter = Router();

scheduleRouter.post("", verifyAuthMiddleware, createScheduleController);
export default scheduleRouter;
