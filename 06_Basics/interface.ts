// interface User {
//   name: string;
//   age: number;
//   greet(text: string): void;
// }


// const user: User = {
//   name: "laxman",
//   age: 23,
//   greet(text):void{
//       console.log(
//        text,this.name
//     );
    
//   }
// };
// user.greet("Hi")

// interface User{
//     name:string;
//     greet(text:string):void
// }

// class Person implements User{
//     name:string;
//     constructor(n:string){
// this.name=n
//     };
//     greet(text:string){
//         console.log(`${text},${this.name}`);
        
//     }
// }
// const p1=new Person("Laxman")
// p1.greet("Hi this is ")


//readonly
// interface User{
//     readonly name:string;
//     greet(text:string):void
// }

// class Greetable implements User{
//     name:string;
//     constructor(n:string){
//         this.name=n
//     }
//     greet(text: string): void {
//         console.log(`${text},${this.name}`);
        
//     }
// }
//it runs
// let p1=new Greetable("laxman")
// p1.name="ram"
// p1.greet("Hi this is")

// let user1:User;
// user1=new Greetable("laxman")
// user1.name="laxman"

//extends interface

// interface One{
//     readonly name:string
// }
// interface two extends One{
//     greet(text:string):void
// }
// class User implements One{
//     name:string;
//     constructor(n:string){
//         this.name=n
//     };
//     greet(text:string){
//         console.log(`${text},${this.name}`);
        
//     }
// }
// let p1:two
// p1=new User("Laxman")
// p1.greet("Please welcome ")


//type addNum=(a:number,b:number)=>number
interface addNum{
    (a:number,b:number):number
}
const add:addNum=(a,b)=>{
    return a+b
}
console.log(add(4,5));
const addNumber=(a:number,b:number):number=>{
    return a+b
}
console.log(addNumber(1,10));

//optional (?)
interface Named{
    name:string,
    outputName?:string
}
class User implements Named{
    name:string;
    constructor(n:string){
        this.name=n
    };
    
}
let user:Named
user=new User("laxman")
console.log(user);
