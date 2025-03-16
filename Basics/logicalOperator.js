//The logical OR (||) operator returns the first truthy value it encounters.
console.log(3 || 2); //3

//The logical AND (&&) operator returns the first falsy value or, if all are truthy, the last value.
//Here, both 3 and 2 are truthy, so it returns the last value (2).
console.log(3 && 2); //2

console.log(0 || 1); //1
console.log(1 || 2); //1
console.log(0 && 1); //0
console.log(1 && 2 && 0); //0
console.log(1 && 2 && 3); //3



