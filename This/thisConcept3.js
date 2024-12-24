const person = {
    name: "Ali",
    greet: function () {
        const sayHello = () => {
            const innerFunction = function () {
                return `Hello, ${this.name}`;
            };
            return innerFunction();
        };
        return sayHello();
    },
};

console.log(person.greet());

//---------------------------------------------------
let person1 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = function () {
                return `Hello, ${this.name}`;
            }.bind({ name: "Ali" });

            const nestedArrow = () => sayHello.call({ name: "Rahul" });

            return nestedArrow();
        }.bind({ name: "Karan" });

        return innerFunction();
    },
};

console.log(person1.greet());

//-------------------------------------------------------
let person3 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = () => {
                return `Hello, ${this.name}`;
            };

            const nestedFunction = function () {
                return sayHello();
            }.bind({ name: "Ali" });

            return nestedFunction.call({ name: "Rahul" });
        }.bind({ name: "Karan" });

        return innerFunction();
    },
};

console.log(person3.greet());

//---------------------------------------------------------
let person4 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const nestedArrow = () => {
                return `Hello, ${this.name}`;
            };

            const regularFunction = function () {
                return nestedArrow();
            }.bind({ name: "Ali" });

            return regularFunction.call({ name: "Rahul" });
        }.bind({ name: "Karan" });

        return innerFunction();
    },
};

console.log(person4.greet());

//-------------------------------------------------------
let person5 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = () => {
                const innerMost = function () {
                    return `Hello, ${this.name}`;
                }.bind({ name: "Ali" });

                return innerMost.call({ name: "Rahul" });
            };

            return sayHello();
        }.bind({ name: "Karan" });

        return innerFunction();
    },
};

console.log(person5.greet());

//-------------------------------------------------------
let person6 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = () => {
                const innerMost = function () {
                    const deepest = () => {
                        return `Hello, ${this.name}`;
                    };

                    return deepest.call({ name: "Rahul" });
                }.bind({ name: "Ali" });

                return innerMost();
            };

            return sayHello.call({ name: "Karan" });
        }.bind({ name: "Kumar" });

        return innerFunction.call({ name: "Ravi" });
    },
};

console.log(person6.greet());

//----------------------------------------------------------
let person7 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = function () {
                const innerMost = function () {
                    const deepest = () => {
                        return `Hello, ${this.name}`;
                    };

                    return deepest.call({ name: "Rahul" });
                }.bind({ name: "Ali" });

                return innerMost.call({ name: "Karan" });
            }.bind({ name: "Ravi" });

            return sayHello.call({ name: "Kumar" });
        }.bind({ name: "Suresh" });

        return innerFunction.call({ name: "Ramesh" });
    },
};

console.log(person7.greet());

//----------------------------------------------------------
let person8 = {
    name: "Manjur",
    greet: function () {
        const innerFunction = function () {
            const sayHello = function () {
                const innerMost = function () {
                    const deepest = () => {
                        const lastOne = function () {
                            return `Hello, ${this.name}`;
                        }.bind({ name: "Ali" });

                        return lastOne.call({ name: "Rahul" });
                    };

                    return deepest.call({ name: "Karan" });
                }.bind({ name: "Ravi" });

                return innerMost.call({ name: "Kumar" });
            }.bind({ name: "Suresh" });

            return sayHello.call({ name: "Ramesh" });
        }.bind({ name: "Ajay" });

        return innerFunction.call({ name: "Vijay" });
    },
};

console.log(person8.greet());
