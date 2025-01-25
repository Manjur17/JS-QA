let arr = [1, 2, 3, 4, 5];
const ans = arr.map((item, index) => item + 1);
console.log(ans)

//input -> call back
//output -> new array
Array.prototype.customMap = function (cb) {
    let newarr = [];
    //logic -> loop on each element of array and collect the result in new array
    for (let i = 0; i < this.length; i++) {
        newarr.push(cb(this[i], i));
    }

    return newarr;
}

const ans1 = arr.customMap((item, index) => item + 1);
console.log(ans1)