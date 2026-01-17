import express, { Router } from "express"
import { userController } from "./users.controller"

const userRouter = express.Router()

userRouter.post("/create", userController.createUser)
userRouter.get("/", userController.getUser)

export default userRouter
