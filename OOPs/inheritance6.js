//Functional Inheritance
//A pattern where objects are enhanced with functions directly rather than relying on prototypes.
function Animal(name) {
    const obj = { name };

    obj.speak = function () {
        console.log(`${name} makes a noise.`);
    };

    return obj;
}

function Dog(name, breed) {
    const obj = Animal(name);
    obj.breed = breed;

    obj.speak = function () {
        console.log(`${name} barks.`);
    };

    return obj;
}

const dog = Dog("Rex", "Labrador");
dog.speak(); // Output: Rex barks.
