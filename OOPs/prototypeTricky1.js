
let object1 = {
    name: "Akshay",
    city: "Dehradun",
    getIntro: function () {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Aditya",
}

// Never do this
object2.__proto__ = object1;

console.log(object2.city); //"Dehradun"
console.log(object1.getIntro()); //Akshay from Dehradun
console.log(object2.getIntro()); // Aditya from Dehradun

/*
object2 proto instaed of pointing to Object.prototype is now pointing to object1(created above)
so object2 inherits the address and getIntro() from object1 and this is the prototypial inheritance.

*/