const arr = [1, 2, 3, 4, 5, 1, 2, 3];
const map = {};

for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) {
        map[arr[i]] += 1; // Increment frequency
    } else {
        map[arr[i]] = 1;  // Initialize frequency
    }
}

console.log(map);
// Output: { '1': 2, '2': 2, '3': 2, '4': 1, '5': 1 }

/*
Why map.arr[i] Won't Work
The dot operator in JavaScript is used to access properties of an object using literal property names (e.g., map.someProperty).
The map object doesn't have a property literally named arr (or arr[i]).
Instead, you are using dynamic property names derived from the values in arr.
map[arr[i]] computes the property key dynamically based on the value of arr[i].
Since map.arr doesn't exist, this would throw an error or produce undefined.
*/


for (let elem of arr) {
    if (map.hasOwnProperty(elem)) {
        map[elem] += 1; // Increment frequency
    } else {
        map[elem] = 1;  // Initialize frequency
    }
}


const map1 = new Map();

for (let i = 0; i < arr.length; i++) {
    if (map1.has(arr[i])) {
        let freq = map1.get(arr[i]);
        map1.set(arr[i], freq + 1);
    } else {
        map1.set(arr[i], 1);
    }
}

console.log(map1);