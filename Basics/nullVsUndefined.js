let y = null; //variable is declared and value is assigned with an empty value
console.log(x); //undefined

let x; //variable is declared and value is not defined(intentionally)
let user = null; // Indicates no user data yet


let obj = {};
console.log(obj.property); // undefined

function noReturn() {}
console.log(noReturn()); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false ->  they are of different types on strict comparision

console.log(typeof null); // "object"

//Falsy Behavior-> Both null and undefined are falsy but not the same.
if (!null) console.log("Null is falsy"); // Executes
if (!undefined) console.log("Undefined is falsy"); // Executes


