function test() {
    console.log(a); //undefined
    var a = 10;
    console.log(a); //10
}
test();
//--------------2-------------
function outer() {
    console.log(a); //undefined
    var a = 20;

    function inner() {
        console.log(a); //undefined
        var a = 30;
        console.log(a); //30
    }

    inner();
    console.log(a); //20
}
outer();

//---------3-------------
console.log(a); //undefined
var a = 1;

setTimeout(function () {
    console.log(a); //undefined
    var a = 2;
}, 0);

setTimeout(function () {
    console.log(a); //3
}, 0);

var a = 3;

