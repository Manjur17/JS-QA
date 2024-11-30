
// 1 - Syntax
function square(num) {
    return num * num;
}
const square = (num) => {
    return num * num;
};

// 2 - Implicit "return" keyword 
const square = (num) => num * num;

// 3 arguments
function fn() {
    console.log(arguments); //we get arguments passed to function
}
fn(1, 3, 2);

const fnArr = () => {
    console.log(arguments); //behaves differnt in different runtime
};

fnArr(1, 3, 2); //error in browser


// 4 "this" keyword
let user = {
    username: "Roadside Coder",
    rc1: () => {
        console.log("Subscribe to " + this.username);
    },
    rc2() {
        console.log("Subscribe to " + this.username);
    },
};

user.rc1();
user.rc2();

