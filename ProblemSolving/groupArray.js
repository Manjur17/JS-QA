let arr = [10, 20, 30, 40, 50, 60, 70];
// Size of chunk
let chunk = 2;

let output = [];

for (let i = 0; i < arr.length; i += chunk) {
    let newArr = arr.slice(i, i + chunk);
    output.push(newArr);
}

console.log(output);

let subArray = [];
output = [];

for (let i = 0; i < arr.length; i++) {
    subArray.push(arr[i]);

    if (subArray.length === chunk) {
        output.push(subArray);
        subArray = [];
    }
}

if (subArray.length > 0) {
    output.push(subArray);
}

console.log(output);
