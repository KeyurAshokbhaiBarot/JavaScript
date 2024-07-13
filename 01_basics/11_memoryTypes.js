/*
two types of memory:
    1) Stack memory (Primitive data types):
    they provide a copy of the same value of the declared value

    2) Heap memory (Reference type):
    give a direct reference to the variable

*/

let myName = "keyur"

let anothername = myName

// console.log([myName, anothername]);

let userOne = {
    email: "keyur@gmail.com",
    id: 1
}

let userTwo = {
    email: "keyur@gmail.com",
    id: 2
}

userTwo = userOne

userTwo.email = "keyur25@gmail.com"
console.log([userOne.email, userTwo.email]);
