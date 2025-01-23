//Type Guards
function add(n, n1) {
    //adding type guard
    if (typeof n === "string" || typeof n1 === "string") {
        return n.toString() + n1.toString();
    }
    return n + n1;
}
var emp1 = {
    name: "Laxman Giri",
    startDate: new Date(),
    privilages: ["create server"],
};
function printEmployeeInformarion(emp) {
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
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function () {
        console.log("drive car");
    };
    return car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving truck");
    };
    ;
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading cargo ..".concat(amount));
    };
    return Truck;
}());
var v1 = new car();
var v2 = new Truck();
function printOne(vec) {
    vec.drive();
    if ("loadCargo" in vec) {
        vec.loadCargo(500);
    }
    if (vec instanceof Truck) {
        vec.loadCargo(1000);
    }
}
printOne(v1);
printOne(v2);
//type casting
///const userInput=document.getElementById("user-input")
//const userInput=<HTMLInputElement>document.getElementById("user-input")!
var userInput = document.getElementById("user-input");
userInput.value = "hi";
