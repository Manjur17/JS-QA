let obj = {
    name: "Manjur",
    address: "cuttack",
    greet() {
        console.log(this.name, " ", this.address)
    }
}

//obj.__proto__ ->{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

console.log(Object.prototype === obj.__proto__) //true
console.log(obj.__proto__.__proto__); //null

function hello() {
    console.log("hi");
}

console.log(hello.__proto__ === Function.prototype); //true
console.log(hello.__proto__.__proto__ === Object.prototype); //true
console.log(hello.__proto__.__proto__.__proto__); //null

let arr = ["hello", "manjur"];
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__ === Object.prototype); //true
//arr.__proto__.push("hi"); //wrong
arr.push("hi");
console.log(arr);

/*
When you use arr.__proto__.push("hi"):
You are calling Array.prototype.push() directly, which modifies the prototype array (not your arr instance itself).
This is a global change and affects other arrays unexpectedly.
*/
arr.__proto__.push("hi"); //hi is enjoy present by default in the push() of Array.prototype, affects all arrays globally
console.log(Array.prototype); // ["hi"]
let newArr = [];
console.log(newArr); // Output: ["hi"] - Unexpected side effect!



