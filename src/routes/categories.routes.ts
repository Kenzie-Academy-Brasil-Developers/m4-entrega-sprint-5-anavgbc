import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import getCategoryController from "../controllers/categories/getCategory.controller";
import getCategoryByPropertyIdController from "../controllers/categories/getCategoryByPropertyId.controller";
import ensureIsAdmMiddleware from "../middlewares/isAdmMiddleware";
import verifyAuthMiddleware from "../middlewares/verifyAuthMiddleware";

const categoryRouter = Router();
categoryRouter.post(
  "",
  verifyAuthMiddleware,
  ensureIsAdmMiddleware,
  createCategoryController
);
categoryRouter.get("/:id/properties", getCategoryByPropertyIdController);
categoryRouter.get("", getCategoryController);

export default categoryRouter;
