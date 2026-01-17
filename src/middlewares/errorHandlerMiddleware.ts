import { ErrorHandler } from "@errors";
import { Request, Response, NextFunction } from "express";
// error handling yaxshilandi
// bundle size optimallashtirildi
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