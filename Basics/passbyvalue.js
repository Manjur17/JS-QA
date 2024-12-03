function f(x) {
    x = 99;
}

let a = 10;
console.log(a); //10
f(a); // we are not transferring original a, instead we transfer copy variable of a
console.log(a); //10

function g(s) {
    s = "sanket"; //since its a copy of variable, so value changed will not affect the original variable value
}

let s = "abc";
console.log(s); //abc
g(s);
console.log(s); //abc