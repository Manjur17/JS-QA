if (true) {
    var varVariable = 'This is true';//no block scope
}
console.log(varVariable); //'This is true';

if (true) {//block scope
    let letVariable = 'This is true';
    console.log(letVariable); //'This is true';
}

//console.log(letVariable); //ReferenceError: letVariable is not defined

if (false) {
    var varVariable2 = 'This is true';//no block scope
}
//scope is resolved but value is not assigned
console.log(varVariable2); //'undefined';

function f() {
    {
        let x = 10;
        var z = 9;
    }
    console.log(z); //9
    console.log(x); //error
}

f();

function test() {
    const b = 2

    if (true) {
        const c = 3 //block scope c
    }
    console.log(b) // 2
    console.log(b, c) // Uncaught ReferenceError: c is not defined
}
test()


function test() {
    var a = "Hello";
    let b = "Bye";
    if (true) {
        let a = "Hi";
        let b = "Goodbye"
        //var b = "Goodbye"; //illegal shadowing using var 
        //as b is already defined as in var there is no block scope
        console.log(a); console.log(b);
    }
}
test();