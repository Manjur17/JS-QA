//link a prototype of a function to another function
function Animal() {
    this.greet = () => {
        console.log("I am a");
    }
}

Animal.prototype.greet2 = () => console.log("inside prototype");


function Bird() { 

}

//print the greet function using bird object
Bird.prototype = Object.create(Animal.prototype); //now Bird prototype points to Animal prototype
const bird = new Bird();
//bird.greet(); //why this gives error -> will check later
bird.greet2();


//imp concept the prototype property is available on Constructor functions and classes and not objects created
const obj = {};
obj.prototype; // means it looks for key "prototype" and returns a value undefined

obj = Object.create(null); //obj is now pointing to null