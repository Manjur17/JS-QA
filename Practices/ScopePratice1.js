function test() {
    console.log('Value of X is', x); //undefined
    var x;
}
//test();

function test1() {
    var x = 10;
    var x;
    // 10
    // Reason: second line of var x point to the old var x value that is stored 
    //in the memory and it prints the old value instead of undefined.
    console.log('X is ' + x);
}
//test1();

function varTest() {
    var x = 1;
    //no block scope
    {
        var x = 2;
        console.log(x); //2
    }
    console.log(x); //2
}
//varTest();

function letTest() {
    let x = 1;
    //block scope for let
    {
        let x = 2;
        console.log(x); //2
    }
    console.log(x);//1
}

//letTest();

function do_something() {
    console.log(bar); //undefinded
    var bar = 111;
    console.log(bar); //111
}

//-> heavy ticky
var rate = 10; //global scope
function getRate() {
    //var create function scope durning scope resolution
    ////no block scope for var
    if (rate === undefined) {
        var rate = 6;
        return rate;
    } else {
        return 10;
    }
}

//console.log('Rate is', getRate()); //6

var rat = 10;
function getRate() {
    //no rat in this scope of getRate()
    console.log(rat); //10 from global scope or lexical scope of getRate()
    if (rat === undefined) { //rat and not rate
        var rate = 6;
        return rate;
    } else {
        return 10;
    }
}
console.log('Rate is', getRate());

{
    //TDZ starts
    const func = () => console.log(letVar);
    //actual TDZ 
    let letVar = 3; //TDZ end
    //func(); // 3 -> Before the func() was invoked, the letVar was initialized
}

{
    //func(); //error
    //function is declared with const keyword and also it is a arrow function whereas 
    //the arrow functions are not hoisted
    const func = () => console.log(letVar);
    let letVar = 3;
}

{
    const func = () => console.log(letVar); //trying to use let before TDZ 
    //func();
    let letVar = 3;
}

var status = 'Ready';
function displayStatus() {
    console.log(status); //undefinded
    var status = 'Busy'; //status is hoisted
    console.log(status); //busy
}

//displayStatus();

function decideAction() {
    if (action() === 'Work') {//declaration are hoisted and not expression
        console.log('Working!');
    } else {
        console.log('Resting!');
    }

    function action() {
        return 'Work';
    }
    
    var action = function () {
        return 'Rest';
    };
}

decideAction(); //Output: Working!
