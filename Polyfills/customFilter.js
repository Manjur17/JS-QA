let arr = [1, 2, 3, 4, 5];
const ans = arr.filter((item, index) => item % 2 == 0);
console.log(ans)

//input -> call back
//output -> new array
Array.prototype.customFilter = function (cb) {
    let newarr = [];
    //logic -> loop on each element of array and collect the result in new array
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) {
            newarr.push(this[i]);
        }
    }

    return newarr;
}

const ans1 = arr.customFilter((item, index) => item % 2 == 0);
console.log(ans1)