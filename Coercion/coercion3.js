console.log(2 + +"5");      // 7   (because "5" → 5)
console.log(2 + -"3");      // -1  (because -"3" → -3)
console.log(2 + +true);     // 3   (because +true → 1)
console.log(2 + +false);    // 2   (because +false → 0)
console.log(2 + +"3.5");    // 5.5 (because "3.5" → 3.5)
console.log(2 + +null);     // 2   (because +null → 0)
console.log(2 + +undefined); // NaN (because +undefined → NaN)

//The unary plus (+) operator is used to convert a string into a number.