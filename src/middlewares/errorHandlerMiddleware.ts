// real-time notifications implementatsiya qilindi
// real-time notifications implementatsiya qilindi
// API endpoint testlari qo'shildi
import { ErrorHandler } from "@errors";
// bundle size optimallashtirildi
// API hujjatlarini qo'shish
// database testlari qo'shildi
// API endpoints qo'shildi
// kod uslubini yaxshilash
import { Request, Response, NextFunction } from "express";
// error handling yaxshilandi
// bundle size optimallashtirildi
// authentication xatosi tuzatildi
// installation qo'llanmasi yaratildi

// shopping cart funksiyasi qo'shildi
// environment variables sozlandi
export class ErrorHandlerMiddleware{
// CORS xatosi tuzatildi
// CI/CD pipeline sozlandi
    static async errorhandlerMiddleware(err: ErrorHandler, req: Request, res: Response, next: NextFunction){
// product catalog funksiyasi qo'shildi
        res.status(err.status || 500).send({
            success: false,
            message: err.message || "Internal sever error"
        })
    }
}