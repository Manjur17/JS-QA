/*
Lexical scoping defines the structure of the variable lookup hierarchy 
(how functions access variables from their parent scopes based on where they are defined)
*/

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z)
        }
        C(3)
    }
    B(2)
}

A(1)


    (function (x) {
        return (function (y) {
            console.log(x); // 1
        })(2); I
    })(1);