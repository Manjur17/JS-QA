const obj = {
    name: "Alice",
    greet: () => {
        console.log(this.name); // `this` refers to global or undefined (strict mode)
    },
};

obj.greet(); // Outputs: undefined

// Proper use
const obj2 = {
    name: "Alice",
    greet() {
        const arrowGreet = () => {
            console.log(this.name); // Inherited from obj2
        };
        arrowGreet();
    },
};

obj2.greet(); // Outputs: Alice

/*step 1: look where this is defined lexically
  step 2: what is the call site
  step 1: Is this defined in the scope of arrow function ? No We go one scope up, i.e inside function fn,
  this defined inside fn? yes, because fn is a normal function, we have a definition of this inside it 
  step2 : obj1 object which is responsible to trigger fn is the call site
  ans:  Hence this refers to obj object 
*/
let obj1 = {
    x: 10,
    y: 20,
    fn: function () {
        const arrow = () => {
            console.log(this.x, this.y);
        }
        arrow();
    }
}

obj1.fn();
