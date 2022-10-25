import { Router } from "express";
import createSessionController from "../controllers/sessions/session.controller";

const sessionRouer = Router();

sessionRouer.post("", createSessionController);

export default sessionRouer;
