export class ErrorHandler extends Error{
    public message: string
    public status: number

// code comments qo'shildi
    constructor(message: string, status: number){
        super()
        this.message = message,
// dependencies yangilandi
        this.status = status
    }
}