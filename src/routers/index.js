import express from "express";
import userRouter from "./users.js";
import RoleRouter from "./roles.js"
import authRouter from "./auth.js";

const appRouter = express.Router();
appRouter.use("/api/v1", RoleRouter)
appRouter.use("/api/v1", userRouter);

appRouter.use("/api/v1", authRouter)

export default appRouter;  