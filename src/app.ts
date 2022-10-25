import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./routes/users.routes";
import sessionRouer from "./routes/session.routes";
import categoryRouter from "./routes/categories.routes";
import propertyRouter from "./routes/properties.routes";
import scheduleRouter from "./routes/schedules.routes";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRouer);
app.use("/categories", categoryRouter);
app.use("/schedules", scheduleRouter);
app.use("/properties", propertyRouter);

app.use(handleErrorMiddleware);

export default app;
