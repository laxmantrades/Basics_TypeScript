var userInput;
var userName;
userInput = 10;
userName = "laxman";
// userName=userInput   this is wrong
//never return type functions
function throwError(message, number) {
    throw { message: message, number: number };
}
throwError("Sorrry", 505);
