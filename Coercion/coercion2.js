console.log(0 == "0"); //true
console.log(0 === "0"); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log([] == false); //true
console.log([] == ![]); //true


console.log(NaN == NaN);  //false
console.log(NaN === NaN); //false
console.log(typeof NaN); //number
console.log(isNaN('hello')); //true
console.log(isNaN(123)); //false

console.log([] + {}); //[object Object]
console.log({} + []); //[object Object]
console.log([1,2] + [3,4]); //"1,23,4"




