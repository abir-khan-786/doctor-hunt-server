import { Request, Response } from "express"
import { appointmentService } from "./appointment.service"

const createAppointment = (req: Request, res: Response) => {
  const appointmentData = req.body

  const newAppointment = appointmentService.createAppointment(appointmentData)
  res.status(201).json({
    message: "Appointment created successfully",
    data: newAppointment,
  })
}
const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await appointmentService.getAllAppointments()
    res.status(200).json({
      status: "success",
      data: appointments,
    })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const appointmentController = {
  createAppointment,
  getAllAppointments,
}
