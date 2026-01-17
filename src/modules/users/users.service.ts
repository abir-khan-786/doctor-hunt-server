import { Users } from "../../generated/prisma/client"
import { prisma } from "../../ilb/prisma"

const createUser = async (data: Omit<Users, "id" | "createdAt">) => {
  const result = await prisma.users.create({
    data: {
      ...data,
    },
  })
  return result
}

const getAllUsers = async () => {
  const users = await prisma.users.findMany({})
  return users
}

export const userService = {
  createUser,
  getAllUsers,
}
