//Type Guards

//type1
type Combinable = string | number;
type Numeric = number | boolean;
function add(n: Combinable, n1: Combinable) {
  //adding type guard
  if (typeof n === "string" || typeof n1 === "string") {
    return n.toString() + n1.toString();
  }
  return n + n1;
}
// console.log(add(2,2))
// console.log(add(2,"2"))

//type 2

type Admin = {
  name: string;
  privilages: string[];
};

type Employe = {
  name: string;
  startDate: Date;
};
type elevetedeomployee = Admin & Employe;
type unknownemployee = Admin | Employe;

const emp1: elevetedeomployee = {
  name: "Laxman Giri",
  startDate: new Date(),
  privilages: ["create server"],
};

function printEmployeeInformarion(emp: unknownemployee) {
  console.log(emp.name);
  // console.log(emp.privilages);

  //now typeguard comes in s
  // if(typeof emp==="object"){    ///wrong code
  //     console.log(emp.privilages)
  // }
  if ("privilages" in emp) {
    console.log(emp.privilages);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}
// printEmployeeInformarion({ name: "laxman", privilages: ["laxman"] });
// printEmployeeInformarion(emp1);


//3rd types

class car{
    drive(){
        console.log("drive car");
        
    }
}
class Truck{
    drive(){
        console.log("driving truck");
        
    };
    loadCargo(amount:number){
        console.log(`loading cargo ..${amount}`);
        
    }
}

type vechicle=car| Truck

const v1=new car()
const v2=new Truck()

function printOne(vec:vechicle){
   
     vec.drive();
   if("loadCargo" in vec){
    vec.loadCargo(500)
   }
   if(vec instanceof Truck){
    vec.loadCargo(1000)
   }
    
    
    
}
printOne(v1)
printOne(v2)


//type casting

///const userInput=document.getElementById("user-input")

//const userInput=<HTMLInputElement>document.getElementById("user-input")!
const userInput=document.getElementById("user-input")! as HTMLInputElement
userInput.value="hi"