function x() {
    console.log("Wow");
}
function x(y) {
    console.log("hi", y);
}
//x gets overwritten as scope of x is already defined in global scope
x("Sanket");  //hi sanket
x(); //hi undefined