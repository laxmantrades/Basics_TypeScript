let userInput:unknown
let userName:string

userInput=10
userName="laxman"
// userName=userInput   this is wrong





//never return type functions
function throwError(message:string,number:number):never{
    throw{message,number}
}
throwError("Sorrry",505)