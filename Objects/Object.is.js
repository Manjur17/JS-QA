let obj = { x: 10 };
console.log(Object.is(obj, obj)); // true -> comparing same reference

console.log(Object.is(obj, { x: 10 })); // false -> comparing different reference


//Same-value comparison (same-value equality)
console.log(Object.is(1, 1)); // true
console.log(Object.is(1, "1")); // false

console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj1 = {};
console.log(Object.is(obj1, {}));
// Expected output: false

// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, NaN); // true
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
