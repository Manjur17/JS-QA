function x() {
    console.log("Wow");
}

//avoid naming collision
(function x(y) {
    console.log("hi", y);
})("Sanket");  //hi sanket

x(); //wow