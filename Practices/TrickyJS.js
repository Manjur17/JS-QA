function hello() {
    A = 7; //during execution/runtime A goes to outer scope and let variable A is assign value
    console.log(A);
}

let A; //no error
hello();
//using before initialization
//let A; //ReferenceError: Cannot access 'A' before initialization