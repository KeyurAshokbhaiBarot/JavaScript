const name = "Keyur"
const repoCount = 50

// console.log(name + repoCount);

// String Interpolation:
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String("Keyur-FC-Chelsea")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newString1 = "    Keyur   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://keyur.com/keyur%20%barot"

console.log(url.replace('%20', '-'));

console.log(url.includes('keyur'));

console.log(gameName.split('-'));