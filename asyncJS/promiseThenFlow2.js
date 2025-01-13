console.log('Start'); //1

Promise.resolve().then(() => { //p1
    console.log('Promise 1'); //3

    return Promise.resolve().then(() => {//p3 -> returns a promise so when this .then goes to queue, p2 has to wait for this this to return and then it can enter the queue
        console.log('Promise 2'); //4
        return Promise.resolve('Promise 3'); //this goes after p2
    }).then((value) => {//p4
        console.log(value); //5
        return value
    });
}).then((res) => {//p2 -> this is registered but it only goes to queue when p1 is resolved(first then is resolved)
    console.log('Promise 4' , res);//6
});

console.log('End'); //2

/*
Initial State
Microtask Queue: Empty
Call Stack: Empty

Round 1: Add the first .then() to the microtask queue
The Promise.resolve() resolves immediately, and its first .then() callback is added to the microtask queue.
Microtask Queue:
Outer .then() callback (logs 'Promise 1')

Round 2: Execute the first .then() callback
The outer .then() is dequeued and executed:

Logs 'Promise 1' → Output: Promise 1.
Inside this callback:
A new promise chain starting with Promise.resolve().then(...) is created and returned.
Returning this promise ensures that the subsequent .then() for 'Promise 4' will wait for the inner promise chain to complete.
The .then() callback for 'Promise 2' is enqueued.
Microtask Queue (After Round 2 Execution):

Inner .then() callback (logs 'Promise 2')

Round 3: Execute the inner .then() callback
The inner .then() is dequeued and executed:

Logs 'Promise 2' → Output: Promise 2.
Returns Promise.resolve('Promise 3').
The .then() for 'Promise 3' is enqueued.
Microtask Queue (After Round 3 Execution):

.then() callback for 'Promise 3' (logs 'Promise 3 promise 5')
Round 4: Execute the .then() for 'Promise 3'
The .then() callback for 'Promise 3' is dequeued and executed:

Logs 'Promise 3 promise 5' → Output: Promise 3 promise 5.
Returns 'Promise 3'.
Microtask Queue (After Round 4 Execution):

Outer .then() callback (logs 'Promise 4 Promise 3')
Round 5: Execute the outer .then() callback
The outer .then() is dequeued and executed:

Logs 'Promise 4 Promise 3' → Output: Promise 4 Promise 3.
The res is 'Promise 3', passed down from the returned value of the inner .then().
Microtask Queue: Empty
*/