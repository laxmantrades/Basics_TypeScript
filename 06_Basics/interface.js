"use strict";
// interface User {
//   name: string;
//   age: number;
//   greet(text: string): void;
// }
const add = (a, b) => {
    return a + b;
};
console.log(add(4, 5));
const addNumber = (a, b) => {
    return a + b;
};
console.log(addNumber(1, 10));
class User {
    constructor(n) {
        this.name = n;
    }
    ;
}
let user;
user = new User("laxman");
console.log(user);
