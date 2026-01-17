import express from "express"
import "dotenv/config"
import cors from "cors"
import userRouter from "./modules/users/user.route"
import appointmentRouter from "./modules/appointment/appointment.route"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/v1/users", userRouter)
app.use("/api/v1/appointment", appointmentRouter)

export default app
