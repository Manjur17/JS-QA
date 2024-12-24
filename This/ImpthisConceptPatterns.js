const obj = {
    name: "Alice",
    greet: function () {
        function inner() {
            console.log(this.name); // undefined
        }
        inner(); //called alone
    }
};
obj.greet();

//Prototype and this
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(this.name);
};

const person = new Person("Alice");
person.greet();
const greetFn = person.greet;
greetFn(); // undefined -> alone

//Arrow Functions in Constructor Functions
function Person1(name) {
    //this inside function is the new keyword object -> {name : "Alice"}
    this.name = name;
    this.greet = () => {
        console.log(this.name); // Alice
    };
}

const person1 = new Person1("Alice"); // `this` refers to the new object { name: "Alice" }
person1.greet();
const greetFn1 = person1.greet;
greetFn1(); // -> Alice

//
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(this.name);
    }
}
const person2 = new Person("Alice"); //`this` refers to the new object { name: "Alice" }
person2.greet(); //how is greet()
const greetFn2 = person2.greet;
greetFn2(); // undefined (unbound method)

//

class Person1 {
    constructor(name) {
        this.name = name;
        this.greet = () => {
            console.log(this.name); // `this` is always the instance
        };
    }
}

const person3 = new Person1("Alice"); //{name: "Alice", greet()}
const greetFn3 = person3.greet;
console.log(greetFn3); //-> () => { console.log(this.name); // `this` is always the instance }
greetFn3(); // Logs "Alice"

