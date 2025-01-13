console.log('Start'); //1

Promise.resolve().then(() => { //p1
    console.log('Promise 1'); //3
    Promise.resolve().then(() => {//p3 -> doesnot return anything so when this .then goes to queue, p2 also goes to queue 
        console.log('Promise 2'); //4
        return Promise.resolve('Promise 3'); //this goes after p2
    }).then((value) => {//p4
        console.log(value); //6
    });
}).then(() => {//p2 -> this is registered but it only goes to queue when p1 is resolved(first then is resolved)
    console.log('Promise 4');//5
});

console.log('End'); //2

//------------Actual flow------------------------

/*
Initial State
Microtask Queue: Empty
Call Stack: Empty

Round 1: Add the first .then() to the microtask queue
Promise.resolve() is resolved immediately, and its .then() is added to the microtask queue.

Microtask Queue: Outer .then() callback (logs 'Promise 1')
Call Stack: Empty

Round 2: Execute the first .then() callback
The first .then() is dequeued from the microtask queue and executed:

Logs 'Promise 1' → Output: Promise 1.
Inside this callback:
A new inner promise (Promise.resolve().then(...)) is created.
Its .then() callback is added to the microtask queue.
The outer .then() for 'Promise 4' is also added to the microtask queue (since the first .then() didn't return anything).
Microtask Queue (After Round 2 Execution):
Inner .then() callback (logs 'Promise 2')
Outer .then() callback (logs 'Promise 4 undefined')

Round 3: Execute the inner .then() callback
The inner .then() callback is dequeued and executed:

Logs 'Promise 2' → Output: Promise 2.
Inside this callback:
Promise.resolve('Promise 3') is returned.
A .then() for 'Promise 3' is added to the microtask queue.
Microtask Queue (After Round 3 Execution):

Outer .then() callback (logs 'Promise 4 undefined')
.then() callback for 'Promise 3' (logs 'Promise 3 promise 5')

Round 4: Execute the outer .then() callback
The outer .then() callback is dequeued and executed:

Logs 'Promise 4 undefined' → **Output: Promise 4 undefined'.
Since no value was returned in the first .then(), res is undefined.
Microtask Queue (After Round 4 Execution):

.then() callback for 'Promise 3' (logs 'Promise 3 promise 5')
Round 5: Execute the .then() for 'Promise 3'
The .then() callback for 'Promise 3' is dequeued and executed:

Logs 'Promise 3 promise 5' → **Output: Promise 3 promise 5'.
Microtask Queue: Empty

*/
