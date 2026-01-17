export class ErrorHandler extends Error{
    public message: string
    public status: number
// kod formatlash va indentatsiya

// code comments qo'shildi
// API endpoint testlari qo'shildi
    constructor(message: string, status: number){
        super()
        this.message = message,
// dependencies yangilandi
// dependencies yangilandi
        this.status = status
    }
}