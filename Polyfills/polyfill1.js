
// Pollyfills
// Identify Inputs and Outputs: Understand the arguments the polyfill method should accept and the expected return value.

// Determine Ownership: Check whether the method belongs to Array, Object, Function, or another prototype.

// Understand the Logic: Analyze how the native method works, including its flow and functionality.

// Draft a Skeleton: Create a basic structure for the polyfill to outline its functionality.

// Test Polyfill Use Case: Write a usage example for the pol

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];//1
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);//15
  }
  return accumulator;
};


const nums = [1, 2, 3, 4, 5];


// const sum = nums.reduce((acc, curr) => {
//   return acc + curr;
// });

const sum = nums.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum)


