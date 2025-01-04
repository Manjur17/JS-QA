/* in JavaScript, when you invoke the next() method on a generator object, 
the generator function resumes execution immediately after the last yield statement encountered. 
This means that each call to next() continues the function's execution from where it previously paused, 
proceeding until it reaches the next yield statement or the end of the function.
*/

function* myGenerator() {
    console.log("Start");
    const a = yield 1; // Pauses here and yields 1
    console.log("After first yield:", a);
    const b = yield 2; // Pauses here and yields 2
    console.log("After second yield:", b);
    return "Done";
}

const gen = myGenerator();

console.log(gen.next());       // { value: 1, done: false }
console.log(gen.next('A'));    // { value: 2, done: false }
console.log(gen.next('B'));    // { value: 'Done', done: true }

/*
Execution Breakdown:

First next() Call:

Starts the generator function.
Logs "Start".
Encounters yield 1, pauses, and returns { value: 1, done: false }.
Second next('A') Call:

Resumes execution immediately after yield 1.
Assigns 'A' to variable a.
Logs "After first yield: A".
Encounters yield 2, pauses, and returns { value: 2, done: false }.
Third next('B') Call:

Resumes execution immediately after yield 2.
Assigns 'B' to variable b.
Logs "After second yield: B".
Reaches the end of the function, returns "Done", and the generator is complete with { value: 'Done', done: true }.
 */