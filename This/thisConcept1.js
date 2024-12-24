// 1st -> where is this defined - in line 10
// 2nd -> what is the surrounding in which it is defined(the target fuction) -> normal function
// 3rd -> where and how the target function is being called
// 4th -> the thing attached to the target function -> here nothing is attached so 'this' is global
let name = "Global";
let person = {
    name: "Manjur",
    greet: function () {
        const sayHello = function () {
            return `Hello, ${this.name}`;
        };
        return sayHello(); //this is global
    },
};

console.log(person.greet()); //Hello Global
let greetFn = person.greet;
console.log(greetFn()); //Hello Global

//-----------------------------------------
let person1 = {
    name: "Manjur",
    greet: function () {
        //now this here is person1 as the function is normal and is called with person1.greet()
        const sayHello = () => {
            return `Hello, ${this.name}`; //go 1 step out lexically
        };
        return sayHello(); 
    },
};

console.log(person1.greet()); //Hello Manjur

//-------------------------------------------
let person3 = {
    name: "Manjur",
    greet: function () {
        //find this -> person then changed to anotherPerson
        const sayHello = () => {
            return `Hello, ${this.name}`;
        };
        return sayHello();
    },
};

let anotherPerson = { name: "Ali" };

console.log(person3.greet.call(anotherPerson)); //this is changed to anotherPerson

//-----------------------------------------------

let name1 = "Global";

let person2 = {
    name: "Manjur",
    greet: () => {
        return `Hello, ${this.name}`;
    },
};

console.log(person2.greet()); //Hello Global



