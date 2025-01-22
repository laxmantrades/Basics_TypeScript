//union literal types  type alias

//union
//why
// function combine(num1: number | string, num2: number | string) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// const add = combine(2, 4);
// const combinenumber = combine("laxman", "giri");
// console.log(add, combinenumber);


//! literal types
// function combine(num1: number | string, num2: number | string ,type:"as-number"|"as string") {
//     if (typeof num1 === "number" && typeof num2 === "number" || type==="as-number") {
//       return +num1 + +num2;
//     } else {
//       return num1.toString() + num2.toString();
//     }
//   }
//   const add = combine("2", "4","as-number");
//   const combinenumber = combine("laxman", "giri","as string");
//   console.log(add, combinenumber);

//type alias /custom types
type Combinable=number|string
type combined="as-number"|"as string"
function combine(num1: Combinable, num2: Combinable ,type:combined) {
    if (typeof num1 === "number" && typeof num2 === "number" || type==="as-number") {
      return +num1 + +num2;
    } else {
      return num1.toString() + num2.toString();
    }
  }
  const add = combine("2", "4","as-number");
  const combinenumber = combine("laxman", "giri","as string");
  console.log(add, combinenumber);

type User={
    name:String,
    age:number
    college:"Niels Brock"
}

const user:User={
    name:"laxman",
    age:23,
    college:"Niels Brock"
}
console.log(`My name is ${user.name}`);

function greet(user:User){
  console.log(`My name is ${user.name}`);
}