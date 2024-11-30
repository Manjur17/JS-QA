//console.log(square) //error const variables are not hoisted
//console.log(square(5)) //error function expression are not hoisted

const square = function (n) {
    return n * n
}

console.log(square2) //undefined as square2 is a variable and var variables are hoisted
//console.log(square2(5)) //error as function expression are not hoisted

var square2 = function (n) {
    return n * n
}
//--------
function test(theObject) {
    theObject.make = "Toyota"
}

const car_details = {
    make: "Honda",
    model: "Accord",
    year: 1998,
}

console.log("car_details.make 1", car_details.make) //Honda
test(car_details) //pass by reference
console.log("car_details.make 2" + car_details.make) //Toyota

//commas are used so it becomes var num2 and var name
var num1 = 20,
    num2 = 3, //var num2 = 3
    name = "Chamakh" //var name = "Chamakh" 

function getScore() {
    var num1 = 2,
        num2 = 3 //var num2 = 3
    //closures of add()
    function add() {
        return name + " scored " + (num1 + num2); //Chamakh scored 5(2+3)
    }

    return add()
}

console.log(getScore()) //Chamakh scored 5(2+3)

function addSquares(a, b) {
    function square(x) {
        return x * x
    }
    return square(a) + square(b)
}

const a = addSquares(2, 3)//[4+9] = 13
const b = addSquares(3, 4) //[9+16] = 27
const c = addSquares(4, 5)//[16+25] =41
console.log(a, b, c);
