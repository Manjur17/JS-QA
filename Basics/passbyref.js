function f(arr) {
    arr[3] = 1000; //since reference is passed, so value changed will affect the original array
}

let o = [0, 1, 2, 3]
console.log(o);
f(o); //reference is passed
console.log(o); //[0, 1, 2, 1000]