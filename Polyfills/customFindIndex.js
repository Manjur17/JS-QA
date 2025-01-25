const arr = [1, -2, 3, 4, 5, 2, 3, 13, 2];

const ans = arr.findIndex((item) => item == 2);

const index = arr.findIndex((currentValue, index, arr) => {
    // console.log(`Value: ${currentValue}, Index: ${index}, Array: ${arr}`);
    return currentValue > 10;
});

console.log(ans, index);

//input -> callback function
//output -> single value(index)

Array.prototype.customFindIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, arr)) {
            return i;
        }
    }
    return -1;  //if element not found returns -1
}

console.log(arr.customFindIndex((currentValue, index, arr) => currentValue > 10));
