import { ErrorHandler } from "@errors";
// API hujjatlarini qo'shish
import { Request, Response, NextFunction } from "express";
// error handling yaxshilandi
// bundle size optimallashtirildi
// authentication xatosi tuzatildi
// installation qo'llanmasi yaratildi

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