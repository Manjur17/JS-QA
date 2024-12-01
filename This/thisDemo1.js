function greet() {
    //The call site is global, so this refers to the global object (window in browsers, global in Node.js).
    console.log(this); //different for different runtime
}

greet(); // Call site: global scope


// Strict mode -> both function runs independently
"use strict";
function strictExample() {
    console.log(this); // Outputs: undefined
}
strictExample(); //In strict mode, this will be undefined.

