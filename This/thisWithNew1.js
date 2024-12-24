function Person(name) {
    this.name = name;
    console.log(this.name);
}

const person = new Person("Alice"); //this - >person -> {name: Alice"}

//--------------------------------
function Person(name) {
    this.name = name;
    return { name: "Explicit Object" };  // Explicitly returns a new object
}

const person1 = new Person("Alice"); //this -> person -> { name: "Explicit Object" }
console.log(person1.name); //Explicit Object

//----------------------------------
function Person(name) {
    this.name = name;
    return "I am a string!"; //primitives have no effect
}

const person2 = new Person("Alice"); //this -> person -> {name: "Alice"}
console.log(person2.name); //Alice

//--------------------------------------------
function Person(name) {
    this.name = name;
}
//this is inside normal function and looking at where and how it is called
//it called without attachment so this here is global object
const person4 = Person("Alice"); // Calling the function without `new`
console.log(person4); //prints the function 
console.log(global.name || window.name); // Depending on the environment

//--------------------------------------------
const Person = (name) => {
    this.name = name;
};

const person3 = new Person("Alice"); //no new for arrow function
console.log(person3.name); //syntax error


