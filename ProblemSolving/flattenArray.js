function flattenArray(arr, result = []) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

function flattenArray2(arr) {
    let stack = [...arr];
    let result = [];

    while (stack.length > 0) {
        const element = stack.pop();
        
        if (Array.isArray(element)) {
            stack.push(...element);
        } else {
            result.unshift(element);
        }
    }

    return result;
}

// Example Usage
const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArray2(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


