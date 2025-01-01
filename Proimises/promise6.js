
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Timer of p1 done");
        rej(100);
        100
    }, 5000);
})

const p2 = p1.then(function f() { throw 99; }, function g() { return 88; });

/*
p1 is rejected and the p1.then() with rejected callback g() inside onRejection array moves to microtask queue
and this returns 88 which makes the p2 promise fulfilled.
so p1 is rejected where as p2 is fulfilled/resolved.
*/

const p3 = Promise.resolve(100); //immediately resolves
//p3.then() callback(f) goes to queue and throws an execption
//p4 gets rejected 
const p4 = p3.then((value) => {
    if (value > 50) throw new Error("Value too high!");
    return value;
});

//p4 promise rejection is handled
p4.catch((error) => {
    console.error("p4 rejected with error:", error.message);
});