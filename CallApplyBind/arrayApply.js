
// Call, Bind and Apply in Javascript (Explicit Binding) 
// // Question 8 - Append an array to another array

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array);



// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 9 - Using apply to enhance Built-in functions
// Find min/max number in an array
const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));


// Call, Bind and Apply in Javascript (Explicit Binding) // Question 10 Bound function
function f() {
    //in non-strict mode, when a function’s this is set to null (or undefined), the JavaScript engine defaults the this value to the global object.
    console.log(this); //this is null which is basically global object
}
let user = {
    g: f.bind(null),
};

user.g();

//no bind chaining

function f() {
    console.log(this.name);
}
f = f.bind({ name: "John" }).bind({ name: "Ann" });
f();