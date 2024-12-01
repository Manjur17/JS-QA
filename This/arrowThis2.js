let obj3 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: () => {
            console.log(this.x, this.y);
        }
    }
};

// Another level of context
let obj4 = {
    x: 50,
    y: 100,
    nestedObj: obj3
};

obj4.nestedObj.z.fn(); // Outputs: undefined undefined

/* Explanation:
 The arrow function fn was defined within z.
 Arrow functions don’t have their own this; they lexically inherit this from their defining context.
 Since fn is defined in the global scope, it captures the this value of the global context.
 Even though it is invoked via obj3.z, the lexical this is already fixed to the global scope.
*/