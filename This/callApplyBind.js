/*
You have an object person with the properties firstName and lastName. 
Write a function getFullName that returns the full name of the person when called. 
Use the call method to invoke this function with a person object.

Formula : <FunctionName>.call(<"new execution context">,params)
Formula : <FunctionName>.apply(<"new execution context">,[params])
Formula : <FunctionName>.bind(<"new execution context">,params) 
*/

let person = {
    firstName: "Manjur",
    lastName: "Ali",
}

function getFullName() {
    return `My full name is ${this.firstName} ${this.lastName}`;
}

const ans = getFullName.apply(person);
console.log(ans);
console.log(getFullName.call(person));

const ans1 = getFullName.bind(person);
console.log(ans1());

//----------------------------------------------------------------------------
let person1 = {
    firstName: "Manjur",
    lastName: "Ali",
};

function greet(greeting) {
    return `${greeting} ${this.firstName} ${this.lastName}`;
}

const ans3 = greet.bind(person); // Bind only the context
console.log(ans3("Hello")); // Pass "Hello" when invoking

/*Write a function delayedIntroduction that uses bind to create a version of introduce that always 
introduces the person object. Use setTimeout to log the introduction after 2 seconds, 
passing "Hello" and "25" as arguments.
*/
let person2 = {
    firstName: "Manjur",
    lastName: "Ali",
};

function delayedIntroduction (greeting, age) {
    return `${greeting} ${this.firstName} ${this.lastName} ${age}`;
}
const ans4 = delayedIntroduction.bind(person);

setTimeout(() => {
   console.log(ans("Hello" , "25"));
}, 2000)

/*
Write a function partialIntroduction that takes one argument location. 
Use bind to create a version of customIntroduction that always uses "Hey" for greeting and "28" for age. 
Then, invoke this bound function with "Mumbai" as the argument. Let me know your solution!
*/
let person3 = {
    firstName: "Manjur",
    lastName: "Ali",
};

function customIntroduction(greeting, age, location) {
    return `${greeting} ${this.firstName} ${this.lastName} ${age} ${location}`;
}

// Use `bind` to preset `greeting` and `age`
const partialIntroduction = customIntroduction.bind(person3, "Hey", "28");

// Invoke the bound function with the remaining argument
console.log(partialIntroduction("Mumbai"));
