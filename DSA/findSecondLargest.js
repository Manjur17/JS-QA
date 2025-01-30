function findSecondLargest(arr) {
    if (arr.length == 0) {
        return NaN;
    }

    if (arr.length < 2) {
        return arr[0];
    }

    let largest = -Infinity, secondLargest = -Infinity;

    for (const elem of arr) {
        if (elem > largest) {
            secondLargest = largest;
            largest = elem;
        } else if (elem > secondLargest && elem < largest) {
            secondLargest = elem
        }
    }

    return secondLargest;
}

// Example
console.log(findSecondLargest([20, 30, 40, 20, 140, 10, 33, 45])); // Output: 30