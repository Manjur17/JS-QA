let person = {
    name: "Manjur",
    greet: function () {
        const sayHello = function () {
            return `Hello, ${this.name}`;
        };
        return sayHello(); //alone called
    },
};

console.log(person.greet()); //Hello undefined

//---------------------------------------------
let person2 = {
    name: "Manjur",
    greet: function () {
        //this -> person2
        const sayHello = () => {
            return `Hello, ${this.name}`;
        };
        return sayHello();
    },
};

console.log(person2.greet()); //Hello, Manjur

//-----------------------------------------------
let person3 = {
    name: "Manjur",
    greet: function () {
        const sayHello = () => {
            return `Hello, ${this.name}`;
        };
        return sayHello();
    },
};

let anotherPerson = { name: "Ali" };

console.log(person3.greet.call(anotherPerson)); //Hello, Ali

//VVVV.IMP-------------------------------------------------
let person4 = {
    name: "Manjur",
    greet: function () {
        //this here is the person object
        //now 1 scope lexically out means here and not inside the innerObject
        const innerObject = {
            sayHello: () => {
                return `Hello, ${this.name}`;
            },
        };
        return innerObject.sayHello();
    },
};

console.log(person4.greet());


//-----------------------------------------------------
let person5 = {
    name: "Manjur",
    greet: function () {
        //scope out lexically and we are inside greet() and this here is the anotherFunction2
        const innerObject = {
            sayHello: () => {
                return `Hello, ${this.name}`;
            },
        };
        return innerObject.sayHello();
    },
};

let anotherPerson2 = { name: "Ali" };

console.log(person5.greet.call(anotherPerson2));

//-----------------------------------------------------
let person6 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = () => {
                return `Hello, ${this.name}`;
            };
            return sayHello();
        };
        return innerFunction();
    },
};

console.log(person6.greet());

//-----------------------------------------------------
let person7 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            //innerFunction() is called alone but this of innerFunction() is changed using call so this is not undefined 
            const sayHello = () => {
                return `Hello, ${this.name}`;
            };
            return sayHello();
        };
        return innerFunction.call({ name: "Ali" });
    },
};

console.log(person7.greet());

//-----------------------------------------------------
let person8 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = () => {
                return `Hello, ${this.name}`;
            };
            return sayHello();
        }.bind({ name: "Ali" });

        return innerFunction();
    },
};

console.log(person8.greet());

//-----------------------------------------------------
let person9 = {
    name: "Manjur",
    greet: function () {
        //bind precedence is more than call
        const innerFunction = function () {
            const sayHello = () => {
                return `Hello, ${this.name}`;
            };
            return sayHello();
        }.bind({ name: "Ali" });

        return innerFunction.call({ name: "Rahul" });
    },
};

console.log(person9.greet());



