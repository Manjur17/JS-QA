const nums = [1, 2, 3, 4, 5];
const sum1 = nums.reduce((acc, curr) => {
  return acc + curr;
});

//input -> call back
//output -> single value

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];//1
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);//15
  }
  return accumulator;
};

const sum = nums.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum)


