import { Appointment, Users } from "../../generated/prisma/client"
import { prisma } from "../../ilb/prisma"

const createAppointment = async (data: Omit<Appointment, "id">) => {
  const userId = await prisma.users.findUnique({
    where: { id: data.userId },
  })
  console.log(userId)

  if (!userId) {
    throw new Error("User not found. Appointment cannot be created.")
  }
  const result = await prisma.appointment.create({
    data: {
      ...data,
      date: new Date(),
      userId: userId.id,
    },
  })
  console.log({
    result: result,
    mess: "data addse",
  })
  if (!result) {
    throw new Error("Your appointment was not created")
  }
  return result

  //   const result = await prisma.appointment.create({
  //     data: {
  //       ...data,
  //       date: new Date(),
  //       userId: userId?.id || "",
  //     },
  //   })

  //   if (!result) {
  //     throw new Error("You appointment was not created")
  //   }
  //   return result
}

const getAllAppointments = async () => {
  const appointments = await prisma.appointment.findMany({})
  return appointments
}

export const appointmentService = {
  createAppointment,
  getAllAppointments,
}
