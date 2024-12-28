//composition

//The arrow function syntax (a, b) => f2(f1(a, b)) is shorthand for the return function(a, b) { ... } syntax.
//Composition in Javascript

//ye function return kar raha hai
const comp = (f1, f2) => (a, b) => f2(f1(a, b));

//similar to
const comp = (f1, f2) => {
    return function (a, b) {
        return f2(f1(a, b));
    }
};

// or  

function comp(f1, f2) {
    return function (a, b) {
        return f2(f1(a, b));
    }
};                                      