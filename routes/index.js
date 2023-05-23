import { Router } from "express";

import userRouter from "./user.js";
import hospitalRouter from "./hospitals.js";

const appRouter = Router()

appRouter.use('/user',userRouter)
appRouter.use('/hospital',hospitalRouter)

export default appRouter