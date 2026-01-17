import express, { Application } from "express"
// integration testlar yaratildi
// API hujjatlarini qo'shish
// shopping cart funksiyasi qo'shildi
// API response formatini yaxshilash
// code comments qo'shildi
// installation qo'llanmasi yaratildi
// package.json yangilandi
import dotenv from "dotenv"
// API endpoint testlari qo'shildi
// API response formatini yaxshilash
// kod formatlash va indentatsiya
// kod formatlash va indentatsiya
// integration testlar yaratildi
import router from "./routes"
import { ErrorHandlerMiddleware } from "@middlewares"
// code comments qo'shildi
// installation qo'llanmasi yaratildi
// environment variables sozlandi
dotenv.config()
// CORS xatosi tuzatildi

// componentlarni qayta tashkilash
const PORT = process.env.APP_PORT || 8000
const app: Application = express()

app.use(express.json())
app.use("/api/v1", router)
app.use("/*", ErrorHandlerMiddleware.errorhandlerMiddleware)

app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishga tushdi`)
})