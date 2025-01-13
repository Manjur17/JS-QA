let obj = { x: 10 };
console.log(Object.is(obj, obj)); // true -> comparing same reference

console.log(Object.is(obj, { x: 10 })); // false -> comparing different reference


//Same-value comparison (same-value equality)
console.log(Object.is(1, 1)); // true
console.log(Object.is(1, "1")); // false