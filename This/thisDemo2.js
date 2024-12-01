//Object Context or Object call site
const obj = {
    name: "Alice",
    greet() {
        console.log(this.name);
    },
};

obj.greet(); // Call site: obj, Outputs: Alice

const obj2 = {
    name: "Alice",
    x: 10,
    y: 20,
    fun: function greet() {
        console.log(this.name, this.x, this.y);
    },
};

obj2.fun(); // Call site: obj, Outputs: Alice

//nested object, so call site changes 
let obj3 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function () {
            console.log(this.x, this.y);
        }
    }
}
//call site of fn is z object
obj3.z.fn(); //99 undefined
