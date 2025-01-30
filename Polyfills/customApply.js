let person = {
    firstName: "Java",
    lastName: "Script",
};

function greet(greeting, surname) {
    return `${greeting} ${this.firstName} ${this.lastName} ${surname}`;
}

const ans = greet.apply(person, ["Hello", "developer"]);
console.log(ans);

//input -> object, params
//output -> value 

//params is already an array
Function.prototype.customApply = function (obj, params) {
    if (typeof this != 'function') {
        throw new Error(this, 'is not a callable');
    }

    if (!Array.isArray(params)) {
        throw new TypeError('CreateListFromArrayLike called on non object');
    }

    //chaning the context
    obj.fn = this;
    return obj.fn(...params)
}

const ans1 = greet.customApply(person, ["Hello", "developer"]); // Bind only the context
console.log(ans1); 