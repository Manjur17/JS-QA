const obj = {
    prop: 42,
};

console.log(Object.freeze(obj));


obj.prop = 33; // Throws an error in strict mode

console.log(obj.prop);// Expected output: 42

//input -> object
//output -> returns the same object that was passed to the function.

Object.prototype.customFreeze = function (obj) {

}