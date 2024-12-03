//closure and scope chain
function f() {
    for (var i = 0; i < 4; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
    console.log("ended loop", i); //ended loop 4 4 4 4 4
}

f();

function g() {
    for (let i = 0; i < 4; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
    console.log("ended loop"); //ended loop 0 1 2 3
}

g();