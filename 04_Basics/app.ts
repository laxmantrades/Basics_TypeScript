
//if sring return then string
function add(num1:number,num2:number):string{
    return num1+num2.toString()
}
console.log(add(4,5));


//if number returns then number
function combine(num1:number,num2:number):number{
    return num1+num2
}
console.log(combine(4,5));


//if no return then void 
function greet(user:string):void{
    console.log("Hi"+user);
    
}
greet("laxman")


//neer use function because we don't know what function takes
//bad practise
//let combineFunction:Function

// combineFunction=function(){}
// combineFunction=10
//combineFunction=add
//combineFunction=greet
//console.log(combineFunction(4,5)); //undefined because greet returns array

"good parctise"
let combineFunction:(a:number,b:number)=>number
combineFunction=combine
console.log(combineFunction(1,2));

//function type and callback


type CB=(n:number,text:string)=>number|string
function multiply(num1:number,num2:number,cb:CB){
    const result=num1+num2
    return cb(result,"This is a result")
}
const res=multiply(4,6,(resul,tex)=>{
    return tex+resul
    
})
console.log(res);
