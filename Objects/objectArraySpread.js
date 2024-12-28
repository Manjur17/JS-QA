const arr = [1, 2, 3];
const obj = { ...arr };

console.log(obj); //index becomes key in obj
// Output: { 0: 1, 1: 2, 2: 3 }


const obj1 = { a: 1, b: 2, c: 3 };
const arr1 = [...obj1]; // ❌ This will throw an error: "obj is not iterable" console.log(arr);

const arr2 = [...Object.entries(obj)];
console.log(arr2); // Output: [['a', 1], ['b', 2], ['c', 3]]

