"use strict";
//if sring return then string
function add(num1, num2) {
    return num1 + num2.toString();
}
console.log(add(4, 5));
//if number returns then number
function combine(num1, num2) {
    return num1 + num2;
}
console.log(combine(4, 5));
//if no return then void 
function greet(user) {
    console.log("Hi" + user);
}
greet("laxman");
//never use function because we don't know what function takes
//bad practise
//let combineFunction:Function
// combineFunction=function(){}
// combineFunction=10
//combineFunction=add
//combineFunction=greet
//console.log(combineFunction(4,5)); //undefined because greet returns array
"good parctise";
let combineFunction;
combineFunction = combine;
console.log(combineFunction(1, 2));
function multiply(num1, num2, cb) {
    const result = num1 + num2;
    return cb(result, "This is a result");
}
const res = multiply(4, 6, (resul, tex) => {
    return tex + resul;
});
console.log(res);
