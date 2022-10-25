import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedule.controller";
import scheduleByPropertyController from "../controllers/schedules/scheduleByProperty.controller";
import ensureIsAdmMiddleware from "../middlewares/isAdmMiddleware";
import verifyAuthMiddleware from "../middlewares/verifyAuthMiddleware";

const scheduleRouter = Router();

scheduleRouter.post("", verifyAuthMiddleware, createScheduleController);
scheduleRouter.get(
  "/properties/:id",
  verifyAuthMiddleware,
  ensureIsAdmMiddleware,
  scheduleByPropertyController
);

export default scheduleRouter;
