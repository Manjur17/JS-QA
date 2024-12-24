let name = "Global";

let person = {
    name: "Manjur",
    greet: function () {
        return `Hello, ${this.name}`;
    },
};

//determine where and how the function is called
let greetFn = person.greet;
console.log(greetFn()); //Hello Global

//-------------------------------------
let name1 = "Global";

let person1 = {
    name1: "Manjur",
    greet: () => {
        return `Hello, ${this.name1}`;
    },
};

console.log(person1.greet()); //the global context has name so output is Hello Global

