//Using Object.setPrototypeOf

const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const Dog = {
    bark() {
        console.log(`${this.name} barks.`);
    }
};

// Set Dog's prototype to Animal
Object.setPrototypeOf(Dog, Animal);

const myDog = Object.create(Dog);
myDog.name = "Rex";
myDog.speak(); // Output: Rex makes a noise.
myDog.bark();  // Output: Rex barks.
