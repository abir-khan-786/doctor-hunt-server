import express from "express"
import "dotenv/config"
import cors from "cors"
import userRouter from "./modules/users/user.route"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/v1/users", userRouter)

export default app
