type person = {
  name: string;
  age: number;
};
const user: person = {
  name: "laxman",
  age: 23,
};

const array: Array<person> = [{ name: "laxman", age: 28 }];
//array.push(user)

//console.log(array);

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
const app = merge({ name: "laxman" }, { role: "software" });
console.log(app);

//function createObject(T:string,U:number,V:boolean){
function createObject<T extends string, U extends Number, V extends boolean>(
  name: T,
  age: U,
  isActive: V
): {
  name: T;
  age: U;
  isActive: V;
} {
  return {
    name,age,isActive
  };
}
const obj = createObject("laxman", 23, true);
console.log(obj);


//3RD TYPE GENERIC INTERFACE

interface Box<T>{
    name:T
}
const numberBox:Box<number>={
    name:2
}
const stringBox:Box<string>={
    name:"laxman"
}
console.log(numberBox);
console.log(stringBox);

//generic default

interface User<T=string>{
    data:T,
    status:number
}
type person2={
    data:string,
    age:number
}
const response:User={data:"Success",status:200}
const jsonRes:User<person2>={data:{data:"laxman",age:23},status:200}
console.log(response)
console.log(jsonRes);
;

// 4. Generics with class

class Container<T> {
    private content: T;
    constructor(content: T) {
        this.content = content
    }
    getContent() : T {
        return this.content;
    }
}
// Generic with Array

function getFirst<T> (arr : T[]) : T {
    return arr[0];
}

const firstNumber = getFirst([1,2,3,4]);
const firstString = getFirst(["a","b","c"]);
// console.log(firstNumber);
// console.log(firstString);
const stringContainer = new Container<string>("Hello");
// console.log(stringContainer.getContent());

const numberContainer = new Container<number>(100);
// console.log(numberContainer.getContent());

// Generic with keyof
// const Person = {key:"Mernstack"}
// console.log(Person["key"]);

// function getProperty(obj : object, key : string){
//     return obj[key]
// }
// const res1 = getProperty({}, "name");
// console.log(res1);

function getProperty<T extends object, K extends keyof T>(obj : T , key : K) : T[K] {
    return obj[key]
}

//k extends keyof t means access key of T
const person = {name:"Patel", age:21};
// const person2 = {fullname:"Patel", salary:21};
const name1 = getProperty(person, "name");
// const age = getProperty(person2, "age");
console.log(name1);

