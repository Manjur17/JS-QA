function greet(greeting) {
    return `${greeting}, ${this.name}`;
}
//bind permanently sets the this context -> more precedence
const boundGreet = greet.bind({ name: "Ali" });

console.log(boundGreet("Hello")); //Hello, Ali
//Once a function is bound using bind, its this context cannot be changed by call or apply.
console.log(boundGreet.call({ name: "Manjur" }, "Hi")); //Hello, Ali

//----------------------------------------------------------------
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const boundGreet2 = greet.bind({ name: "Ali" });

console.log(boundGreet("Hello", "!")); //Hello Ali! 
console.log(boundGreet2.call({ name: "Manjur" }, "Hi", "?")); //Hi Ali?
console.log(boundGreet2.apply({ name: "Rahul" }, ["Hey", "."])); //Hey Ali.

//------------------------------------------------------------------
const person = {
    name: "Ali",
};

function greet() {
    const sayHello = () => {
        return `Hello, ${this.name}`;
    };
    return sayHello();
}

const boundGreet3 = greet.bind({ name: "Manjur" });

console.log(boundGreet3()); //Hello Manjur 

//--------------------------------------------------------------------
const person1 = {
    name: "Ali",
};

const greet = () => {
    return `Hello, ${this.name}`;
};

console.log(greet.call({ name: "Manjur" }));


