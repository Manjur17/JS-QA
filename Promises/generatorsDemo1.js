function* myGenerator() {
    console.log("inside generator"); // Executes the first time i.next() is called
    yield 100; // Pauses execution and returns 100, control exits the generator function
    console.log("line 4"); // Resumes execution when i.next() is called again
    yield 99; // Pauses execution and returns 99
    console.log("line 6"); // Resumes execution when i.next() is called again
    yield 87; // Pauses execution and returns 87
    console.log("line 8"); // Resumes execution when i.next() is called again
    yield -1; // Pauses execution and returns -1
    console.log("line 10"); // Resumes execution, no more yield statements, so done = true
}

const i = myGenerator(); // Create a generator object and returns an iterator

// A generator function is not executed immediately; it returns an iterator object.
//When i.next() is called, the generator function enters the call stack, executes until the next yield, and then exits the stack.
// Call the iterator's `next()` method
console.log(i.next());
// Executes the generator function until the first yield.
// Prints:
// inside generator
// { value: 100, done: false }
// The generator function is removed from the call stack after yielding.

console.log("out");
// Prints: out

console.log(i.next());
// Resumes from where it paused (after the first yield).
// Prints:
// line 4
// { value: 99, done: false }

console.log("out");
// Prints: out

console.log(i.next());
// Resumes from where it paused (after the second yield).
// Prints:
// line 6
// { value: 87, done: false }

console.log("out");
// Prints: out

console.log(i.next());
// Resumes from where it paused (after the third yield).
// Prints:
// line 8
// { value: -1, done: false }

console.log("out");
// Prints: out

console.log(i.next());
// No more yield statements; execution continues until the function exits.
// Prints:
// line 10
// { value: undefined, done: true }

console.log("out");
// Prints: out

console.log(i.next());
// The generator is already finished, so it always returns { value: undefined, done: true }.
// Prints:
// { value: undefined, done: true }

console.log("out");
// Prints: out
