//simple promise chaining
const p1 = Promise.resolve(100); //immediately resolved

//p1.then() callback(f) goes to microtask queue from onFulfillment array
//p2 is resolved with value "New value"
const p2 = p1.then((value) => {
    console.log("Processing p1 value:", value);
    return "New value";
});

//p2 promise .then, callback is executed with value "New value"
p2.then((value) => {
    console.log("p2 resolved with value:", value);
});