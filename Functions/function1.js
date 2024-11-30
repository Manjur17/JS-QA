const f = function fun() {
	console.log("hi");
}
f(); // the scope of fun is inside f only and we cannot directly call fun
//fun(); //throws error


test(); //hoisted and can be accessed
console.log(test); //[Function: test]

function test() {
	console.log("hello");
}