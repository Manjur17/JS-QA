function sum(a, b, c) {
    return a + b + c;
}

function currySum(a) {
    //returns closure functions
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(1, 2, 3));
console.log(currySum(1)(2)(3));

function currySum1(a) {
    //returns closure functions
    return function (b) {
        return function () {
            return a + b;
        }
    }
}
console.log(currySum1(1)(2)());