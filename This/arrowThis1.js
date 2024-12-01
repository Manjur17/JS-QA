//case1
let obj1 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: () => {
            console.log(this.x, this.y);
        }
    }
};

obj1.z.fn(); // Outputs: undefined undefined

//case2
let obj2 = {
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
obj2.z.fn(); //99 undefined

//case3 -> look later as call is used
let obj3 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function () {
            const arrowFn = () => {
                console.log(this.x, this.y);
            };
            arrowFn();
        }
    }
};

obj3.z.fn.call(obj3); // Outputs: 10 20

//case4
let obj4 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function () {
            const outerThis = obj3; // Explicitly refer to obj3
            console.log(outerThis.x, outerThis.y);
        }
    }
};

obj3.z.fn(); // Outputs: 10 20

