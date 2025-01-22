//object arrat tuple enum
var person = {
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
var favouritelanguage;
favouritelanguage = ["React", "react"];
favouritelanguage[1] = "laxman";
//tuple
var personone = {
    name: "laxman",
    age: 23,
    skills: ["backend"],
    product: [23, "45"]
};
personone.product[0] = 123;
//enum
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["author"] = 1] = "author";
})(Role || (Role = {}));
var personthree = {
    name: "Laxman",
    role: Role.admin
};
personthree.role = Role.author;
