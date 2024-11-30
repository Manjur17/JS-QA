//here lexical scoping happens and when ask() looks for teacher value 
//it goes 1 step out (as for ask() the next scope is global and not fun()).
//and look in global scope and not in scope of fun()
//in dynamic scoping, ask() will have look in scope of fun() and pulkit would have been printed at line 9

var teacher = "sanket" //global → sanket

function ask(question) { // ask → global, question ask
    console.log(teacher, question); // sanket why
}

function fun() { // fun global
    var teacher = "Pulkit"; // teacher -> fun -> pulkit 
    ask("why?");
}

fun();
