function add(number1, number2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText) + number1 + number2);
    }
    else {
        console.log("Print is false");
    }
}
var n1 = 30;
var n2 = 30;
var printResult = true;
var someText = "The result is :";
add(n1, n2, printResult, someText);
function multiply(n1, n2) {
    return n1 * n2;
}
console.log(multiply(4, 4));
