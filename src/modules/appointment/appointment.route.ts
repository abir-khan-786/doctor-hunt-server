import express, { Router } from "express"
import { appointmentController } from "./appointment.controller"

const appointmentRouter = express.Router()

appointmentRouter.post("/create", appointmentController.createAppointment)
appointmentRouter.get("/", appointmentController.getAllAppointments)

export default appointmentRouter
