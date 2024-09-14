import express, { Application } from "express"
import dotenv from "dotenv"
import router from "./routes"
import { ErrorHandlerMiddleware } from "@middlewares"
dotenv.config()

const PORT = process.env.APP_PORT || 8000
const app: Application = express()

app.use(express.json())
app.use("/api/v1", router)
app.use("/*", ErrorHandlerMiddleware.errorhandlerMiddleware)

app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishga tushdi`)
})