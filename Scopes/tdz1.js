var teacher = "sanket"; //global

function fun() { //global
    console.log(teacher); //no error as var is function scope and the varible teacher
    //is availabe through out the function scope of fun() 
    var teacher = "pulkit";
    //console.log(content); error as TDZ as block scope let variable can only be accessed post declaration
    let content = "js"; //block scope of content variable start 
    if (content == "js") {
        let hours = '120+';
        console.log(hours, content); // content is availabe inside this block as nested scope is available for let post declaration
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
//console.log( content); error as content is block scope( { })
//for let/const inside functions, curly braces means block scope and not function scope
function gun() 
{
    let a = "apple"; //curly braces means block scope here
}