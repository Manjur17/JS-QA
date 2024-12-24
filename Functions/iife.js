function x() {
    console.log("Wow");
}

//avoid naming collision
(function x(y) {
    console.log("hi", y);
})("Sanket");  //hi sanket

x(); //wow

//4 different ways to create an IIFE in JavaScript:
//1. Parentheses Around the Function Expression
(function () {
    console.log("IIFE with parentheses around the function expression.");
})();

//2. Parentheses Around the Entire Function
(function () {
    console.log("IIFE with parentheses around the entire function.");
}());

// 3. Using a Unary Operator
+function () {
    console.log("IIFE with the unary + operator.");
}();

!function () {
    console.log("IIFE with the unary ! operator.");
}();

//4. Using the Arrow Function
(() => {
    console.log("IIFE using an arrow function.");
})();