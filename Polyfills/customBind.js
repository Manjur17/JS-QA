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
    if (typeof this != 'function') {
        throw new Error(this, 'is not a callable');
    }

    return (...args) => {
        const combinedArgs = [...params, ...args];
        return this.apply(obj, combinedArgs);
    }
}

const ans1 = greet.customBind(person, "Hello"); // Bind only the context
console.log(ans1("developer")); // Pass "Hello" when invoking


Function.prototype.myBind = function (obj = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "cannot be bound as it's not callable");
    }

    obj.fn = this;

    return function (...newArgs) {
        return obj.fn(...args, ...newArgs);
    };
};


const ans2 = greet.myBind(person, "Hello"); // Bind only the context
console.log(ans2("developer")); // Pass "Hello" when invoking