var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user = {
    name: "laxman",
    age: 23,
};
var array = [{ name: "laxman", age: 28 }];
//array.push(user)
//console.log(array);
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var app = merge({ name: "laxman" }, { role: "software" });
console.log(app);
//function createObject(T:string,U:number,V:boolean){
function createObject(name, age, isActive) {
    return {
        name: name,
        age: age,
        isActive: isActive
    };
}
var obj = createObject("laxman", 23, true);
console.log(obj);
var numberBox = {
    name: 2
};
var stringBox = {
    name: "laxman"
};
console.log(numberBox);
console.log(stringBox);
var response = { data: "Success", status: 200 };
var jsonRes = { data: { data: "laxman", age: 23 }, status: 200 };
console.log(response);
console.log(jsonRes);
;
// 4. Generics with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
// Generic with Array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
var firstString = getFirst(["a", "b", "c"]);
// console.log(firstNumber);
// console.log(firstString);
var stringContainer = new Container("Hello");
// console.log(stringContainer.getContent());
var numberContainer = new Container(100);
// console.log(numberContainer.getContent());
// Generic with keyof
// const Person = {key:"Mernstack"}
// console.log(Person["key"]);
// function getProperty(obj : object, key : string){
//     return obj[key]
// }
// const res1 = getProperty({}, "name");
// console.log(res1);
function getProperty(obj, key) {
    return obj[key];
}
//k extends keyof t means access key of T
var person = { name: "Patel", age: 21 };
// const person2 = {fullname:"Patel", salary:21};
var name1 = getProperty(person, "name");
// const age = getProperty(person2, "age");
console.log(name1);
