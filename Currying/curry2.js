function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  const multiply = (a, b) => a * b;
  const add = (a, b) => a + b;
  
  const curriedMultiply = curry(multiply);
  const curriedAdd = curry(add);
  
  const result = curriedAdd(curriedMultiply(2)(3))(4); // (2 * 3) + 4 = 10
  console.log(result);