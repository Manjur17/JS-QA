//Using Mixins (for Composition over Inheritance)
//Mixins allow combining functionalities from multiple sources without strict parent-child relationships.

const canBark = {
    bark() {
        console.log(`${this.name} barks.`);
    }
};

const canEat = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
};

function Dog(name) {
    this.name = name;
}

// Add functionalities via Object.assign
Object.assign(Dog.prototype, canBark, canEat);

const myDog = new Dog("Rex");
myDog.bark(); // Output: Rex barks.
myDog.eat();  // Output: Rex is eating.
