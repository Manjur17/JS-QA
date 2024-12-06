//Constructor Functions:
//Before ES6 class syntax, inheritance was commonly implemented by:
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name); // Inherit properties
}

Dog.prototype = Object.create(Animal.prototype); // Inherit methods
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
    console.log(`${this.name} barks.`);
};
