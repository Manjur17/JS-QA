let person = {
    firstName: "Java",
    lastName: "Script",
};

function greet(greeting, surname) {
    return `${greeting} ${this.firstName} ${this.lastName} ${surname}`;
}

const ans = greet.call(person, "Hello", "developer");
console.log(ans);

//input -> object, params
//output -> value 

Function.prototype.customCall = function (obj, ...params) {
    if (typeof this != 'function') {
        throw new Error(this, 'is not a callable');
    }

    //chaning the context
    obj.fn = this;
    return obj.fn(...params)
}

const ans1 = greet.customCall(person, "Hello", "developer"); // Bind only the context
console.log(ans1); 