//no block scope for var, only global and functional scope
{
    var x = 10;
}

console.log(x); //prints 10

//functional scope for var
function fun(){
    console.log(x); //prints undefined as x is now block scope so new scope for x
    var x = 20; //var value gets reassign as there x in global scope 
    console.log(x);

    var i = 0;
    while (i < 80) {
        var z = i;
        i++;
    }
    console.log(z);
    
}

fun();

console.log(x); //prints 10 from global scope

if (false) {
    var z = 10;
}

console.log(z); //parsing phase z is given scope but no value is assigned at execution phase as we cannot go inside the if(false)
