

//object arrat tuple enum
const person: {
  firstName: string;
  age: number;
  boy: boolean;
  school: {
    name: string;
    address: string;
    postalcode: number[];
  };
} = {
  firstName: "Laxman",
  age: 23,
  boy: true,
  school: {
    name: "Niels Brock",
    address: "Copenhagen",
    postalcode: [2345, 232, 456],
  },
};
//console.log(person);

let favouritelanguage: string[];
favouritelanguage = ["React", "react"];
favouritelanguage[1] = "laxman";

//tuple
const personone: {
  name: string;
  age: number;
  skills: string[];
  product:[number,string]
} = {
  name: "laxman",
  age: 23,
  skills: ["backend"],
  product:[23,"45"]
};
personone.product[0]=123

//enum
enum Role {admin,author}
const personthree={
    name:"Laxman",
    role:Role.admin
}
personthree.role=Role.author