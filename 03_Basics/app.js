//union literal types  type alias
function combine(num1, num2, type) {
    if (typeof num1 === "number" && typeof num2 === "number" || type === "as-number") {
        return +num1 + +num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
var add = combine("2", "4", "as-number");
var combinenumber = combine("laxman", "giri", "as string");
console.log(add, combinenumber);
var user = {
    name: "laxman",
    age: 23,
    college: "Niels Brock"
};
console.log("My name is ".concat(user.name));
function greet(user) {
    console.log("My name is ".concat(user.name));
}
