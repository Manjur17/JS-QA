//arrays in js are dynamic
let arr1 = [1, 2, 3];
arr1[10] = 20;
console.log(arr1[7]); //undefined

for (const x of arr1) {
    console.log(x);
}

//in case of for each, js only prints the defined value and ignores the undefined one
arr1.forEach(element => {
    console.log(element);
});

// Decalaration
let person = {
    name: "Piyush",
    age: 25,
};

let arr = ["apple", "banana", "cherry", person];

console.log(arr.length); // know the length of an array

// # Add and Remove Elements

// Add to End of the Array
arr.push("orange");

// Remove From End of the Array
arr.pop();
arr.pop();

// Add to Top of the Array
arr.unshift("orange");

// Remove From Top of the Array
arr.shift();

let a = [1, 2, 3, 4, 5, 6];
console.log(a.join('|'));
// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);

    i++;
}

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
    return item + 5;
});

// filter in javascript
numbers.filter((item, index, array) => {
    return item > 3;
});

// reduce in javascript
numbers.reduce((prev, item) => {
    return prev + item;
}, 2);

// some in javascript -> returns a boolean
let ans1 = numbers.some((item, index, array) => {
    return item > 3;
});

// every in javascript
let ans2 = numbers.every((item, index, array) => {
    return item < 10;
});

// find in javascript
numbers.find((item, index, array) => {
    return item > 3;
});

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest Operator
function sum(...numbers) {
    return numbers;
}

console.log(sum(nums, nums2, 5, "hello"));

// # More Array Methods

// concat
nums.concat(nums2, arr);

// Slice
arr.slice(-2);

// Splice
arr.splice(1, 2, "orange");

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// reverse
nums.reverse();
// console.log(nums);

// sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorted);
