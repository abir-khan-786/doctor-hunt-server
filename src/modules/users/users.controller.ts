import { Request, Response } from "express"
import { userService } from "./users.service"

const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const userData = req.body
    const newUser = await userService.createUser(userData)
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getAllUsers()
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }
    res.status(200).json({
      status: "success",
      data: user,
    })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
export const userController = {
  createUser,
  getUser,
}
