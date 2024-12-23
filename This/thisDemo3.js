// New Binding (Constructor Functions) using new keyword

/* when we make a new object using the new keyword, then 
   new keyword creates a plain object and this plain object is the call site for the constructor hence, 
   this keyword refers to the plain object altogether.
*/

function ExampleCase(value) {
    this.value = value;

    if (value === "object") {
        return { message: "I am an object!" }; // Returns custom object
    } else if (value === "primitive") {
        return 42; // Ignored, returns `this`
    } else if (value === "nothing") {
        return; // Undefined return, defaults to `this`
    }
}

const case1 = new ExampleCase("object");
console.log(case1); // Outputs: { message: "I am an object!" }

const case2 = new ExampleCase("primitive");
console.log(case2); // Outputs: { value: "primitive" }

const case3 = new ExampleCase("nothing");
console.log(case3); // Outputs: { value: "nothing" }

function Person(name) {
    this.name = name;
    //return [1,2,3];
}

const person = new Person("Alice");
console.log(person.name); // Outputs: Alice