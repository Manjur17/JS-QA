//Despite its name, NaN is of type number.
console.log(typeof NaN); // "number"

//NaN is the only value in JavaScript that is not equal to itself.
console.log(NaN === NaN); // false

console.log(0 / 0);        // NaN
console.log(Math.sqrt(-1)); // NaN
console.log("abc" - 5);   // NaN

console.log(parseInt("abc")); // NaN
console.log(parseFloat("12abc")); // 12 (valid prefix is parsed)
console.log(parseFloat("abc12")); // NaN

//Invalid Operations Involving NaN:
console.log(NaN + 5); // NaN
console.log(NaN * 2); // NaN

//The isNaN() function checks if a value is NaN or can be coerced to NaN.
console.log(isNaN(NaN)); // true
console.log(isNaN("abc")); // true (coerced to NaN)
console.log(isNaN(123)); // false

//Introduced in ES6, Number.isNaN() checks if a value is strictly NaN.
//It does not coerce values, making it more reliable.
//isNaN() is less strict
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false
console.log(Number.isNaN(123)); // false

console.log(isNaN("abc")); // true
console.log(Number.isNaN("abc")); // false

//NaN is a falsy value in Boolean contexts:
if (!NaN) console.log("NaN is falsy"); // NaN is falsy

//Any arithmetic operation with NaN results in NaN:
console.log(NaN + 5); // NaN
console.log(Math.pow(NaN, 2)); // NaN

//Comparisons
//NaN is not equal to any value, including itself:
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

//Use Cases: Detect Invalid Numbers
function safeDivision(a, b) {
    if (b === 0 || isNaN(a) || isNaN(b)) {
        return NaN; // Return NaN for invalid cases
    }
    return a / b;
}
console.log(safeDivision(10, 2)); // 5
console.log(safeDivision(10, 0)); // NaN


//Fallback for NaN
const value = NaN;
const fallback = value || 0;
console.log(fallback); // 0

let result = "text" - 5; // NaN
console.log(result); // NaN
let num = parseFloat("text");
if (Number.isNaN(num)) {
    console.log("Invalid number");
}

//Parsing Invalid Strings
console.log(parseInt("abc")); // NaN
console.log(parseFloat("123abc")); // 123 (partial success)
//Fix: Use type - checking or regex to validate inputs before parsing.