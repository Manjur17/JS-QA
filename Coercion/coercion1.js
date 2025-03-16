// + with a string causes concatenation,
// but other arithmetic operators convert strings to numbers.

console.log('5' - 2); //3
console.log('5' + 2); //52
console.log('5' * '2'); //10
console.log('5' * 2); //10
console.log('5' - '2'); //3
console.log('5' / 2); //2.5
console.log('5' % 2); //1
console.log("5" - true); //4
console.log("5" - false);//5
console.log("5" - null); //5
console.log("5" - undefined); //NaN