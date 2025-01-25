let person = {
    firstName: "Java",
    lastName: "Script",
};

function greet(greeting, surname) {
    return `${greeting} ${this.firstName} ${this.lastName} ${surname}`;
}

const ans = greet.bind(person, "Hello"); // Bind only the context
console.log(ans("developer")); // Pass "Hello" when invoking

//input -> object, params
//output -> function 

Function.prototype.customBind = function (obj, ...params) {
    //Object.setPrototypeOf(this, obj); //change prototype of function to obj

    return function (...args) {
        const combinedArgs = [...params, ...args];
        return this.apply(obj, combinedArgs);
    }
}

const ans1 = greet.customBind(person); // Bind only the context
console.log(ans("Hello", "developer")); // Pass "Hello" when invoking