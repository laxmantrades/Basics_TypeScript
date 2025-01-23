"use strict";
function add(number1, number2, printResult, someText) {
    if (printResult) {
        console.log(`${someText}` + number1 + number2);
    }
    else {
        console.log("Print is false");
    }
}
const n1 = 30;
const n2 = 30;
const printResult = true;
const someText = "The result is :";
add(n1, n2, printResult, someText);
function multiply(n1, n2) {
    return n1 * n2;
}
console.log(multiply(4, 4));
