//no functional scope, only block scope and global scopefor let, 
let y = 15;
{
    let x = 10;
}

//console.log(x); //throws error as x is in block scope

//functional scope for var
function fun(){
    //console.log(y); //throws error as hoisting not possible in let
    let x = 20; //block scope x
    console.log(x);
    console.log(y); //global scope y
}

fun();

console.log(y); //prints 15 from global scope