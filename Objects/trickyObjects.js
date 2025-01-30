

//
const key1 = "toString";
const SuperUsers = { sampKey: "123" };
Object.defineProperty(SuperUsers, "x", {});
console.log(SuperUsers.hasOwnProperty("toString")); // doesnot check in prototypes but checks configurable or enumerable

//hasOwnProperty-> Similar to Object.hasOwn(), but it can be overridden in the prototype chain, making it less robust in some cases.
SuperUsers.hasOwnProperty = () => true
console.log(SuperUsers.hasOwnProperty("toString")); // now gives true in every case


for (const key in SuperUsers) {
    console.log(key); //cannot track property defined by defineProperty
}

console.log(Object.hasOwn(SuperUsers, "x")); //doesnot check in prototypes -> similar to hasOwnProperty
console.log(Object.hasOwn(SuperUsers, "toString")); // false (not own property)

