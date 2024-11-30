var x = 20;
var x = 30; //redeclaration is allowed;

let y = 10;
//error at compile time/parsing phase
//let y = 30; //redeclaration is allowed

const z = 10;
//error at compile time/parsing phase
//const z = 30; //redeclaration is allowed

const obj= {x: 10};
obj.x=20; //no error as value is changed and no reassignment

obj = {y : 20}; //error as reassignment of const variable
