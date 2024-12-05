//Using Constructor Functions (Pre-ES6)

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call the Animal constructor
    this.breed = breed;
}

// Inherit from Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override speak method
Dog.prototype.speak = function () {
    console.log(`${this.name} barks.`);
};

const dog = new Dog("Rex", "Labrador");
dog.speak(); // Output: Rex barks.