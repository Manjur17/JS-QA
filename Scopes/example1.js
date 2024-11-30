var teacher = "manjur"; //scope of formal declaration(var) in global scope

//scope of formal declaration(function) in global scope
function fun() {
    //function scope and now all these below code(with formal declaration)
    //gets scope resolved in parsing phase
    var teacher = "sanket"; //scope of teacher is inside the function scope of fun()
    content = "js";//ignored in parsing phase and value is assigned at execution phase(scope chain)
    console.log(teacher);
}

//scope of formal declaration(function) in global scope
function gun() {
    //function scope and now all these below code(with formal declaration)
    //gets scope resolved in parsing phase
    var teacher = "pulkit"; //scope of teacher is inside the function scope of gun()
    console.log(teacher);
}

//console.log(content); //throws error as as we are using autoglobal before assigning value
fun();
gun();
console.log(content); //autoglobal works as we are using it after assigning value
