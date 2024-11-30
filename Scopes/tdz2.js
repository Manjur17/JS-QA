gun(); //hoisted and global scope and durning execution phase as scope is

function gun() {
    console.log("gun");
}

//function scope is hoisted as during the parsing phase the scope is allocated for formal declarations 
//and in the execution phase when fun() is executed the scope is available(of function) to be executed
//So it's not magic that the code is pasted in the top.
//same for variable with var declaration as it is function scope
//this phenomenon does not apply to let and const as they follow block scope