//Closure Stores Only Variables It Needs
function fun() {
    let i = 0;
    let arr = [200, 300, 400];
    let k = 78;

    //gun closure has i and arr and not k as k is not used inside gun
    //the variables which are not needed inside gun are not remember by closure
    return function gun() {
        i++;
        console.log(i, arr);
    }
}

var x = fun();
x();

function dom(tasks) {
    //closure of this call back function remember tasks as it closure
    setTimeout(() => {
        console.log(tasks);
    }, 1000);
}

dom("hello");

//Remembering the Value and Not Just Snapshotting
function outerFun() {
    let x = 10;
    return function innerFun() {
        console.log("snap: ", x);
    };
}

const closureFunction = outerFun();
var x = 20; // This does NOT affect the closure; it remembers the `x` from its own scope.
closureFunction(); // Outputs: 10


function outer() {
    var x = 10;

    return function inner() {
        var y = 20;

        return function innermost() {
            var z = 30;
            console.log(x + y + z);
        };
    };
}

var closure1 = outer();
var closure2 = closure1();
closure2();  // output is 30 