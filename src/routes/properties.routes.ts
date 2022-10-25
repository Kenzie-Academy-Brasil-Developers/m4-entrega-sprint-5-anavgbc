import { Router } from "express";
import CreatePropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import ensureIsAdmMiddleware from "../middlewares/isAdmMiddleware";
import verifyAuthMiddleware from "../middlewares/verifyAuthMiddleware";

const propertyRouter = Router();
propertyRouter.post(
  "",
  verifyAuthMiddleware,
  ensureIsAdmMiddleware,
  CreatePropertyController
);
propertyRouter.get("", listPropertiesController);
export default propertyRouter;
