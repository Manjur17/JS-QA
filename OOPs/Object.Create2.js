//Inheritance Pattern with Object.create()
// The base object
const Animal = {
    init(name) {
        this.name = name;
        return this;
    },
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

// Create a "subclass"
const Dog = Object.create(Animal);
//overrides the Animal object speak()
Dog.speak = function () {
    console.log(`${this.name} barks.`);
};

// Usage
const myDog = Object.create(Dog).init("Rex");
myDog.speak(); // "Rex barks."
//myDog ---> Dog ---> Animal ---> Object.prototype ---> null