// how values can be sent into a generator using the next() method.
//so the resumptions happens from the last yoield encountered
function* gen() {
    console.log("inside generator"); // Logs when the generator starts execution
    const x = yield 10; // Pauses and yields 10, resumes when `next(value)` is called
    const y = x + 30;   // Uses the passed value for computation
    yield y; // Pauses and yields y
    
}

const it = gen(); // Create a generator object and returns an iterator

console.log(it.next()); // Starts execution, logs "inside generator" and yields 10
// { value: 10, done: false }

// Pass 11 to the generator and resume execution
console.log(it.next(11)); // Resumes, assigns 11 to `x`, and yields 41
// { value: 41, done: false }

console.log(it.next()); // No more yields, generator completes
// { value: undefined, done: true }

console.log(it.next()); // Generator already finished
// { value: undefined, done: true }
