//Using Object.create
const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const Dog = Object.create(Animal);
Dog.init = function (name, breed) {
    this.name = name;
    this.breed = breed;
    return this;
};

Dog.speak = function () {
    console.log(`${this.name} barks.`);
};

const dog = Object.create(Dog).init("Rex", "Labrador");
dog.speak(); // Output: Rex barks.
