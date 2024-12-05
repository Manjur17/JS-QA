// Create a Set
const mySet = new Set();

// Add values
mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate, ignored
mySet.add("Hello");
mySet.add({ name: "Alice" });

// Check size
console.log(mySet.size); // 4

// Check if a value exists
console.log(mySet.has(5)); // true

// Remove a value
mySet.delete(1);

// Clear the Set
mySet.clear();
console.log(mySet.size); // 0

//Iterating Over a Set
for (const value of mySet) {
    console.log(value);
}

mySet.forEach((value) => {
    console.log(value);
});

//Removing Duplicates from an Array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

//Set Operations
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

//union -> Combine two Sets into one.
const union = new Set([...setA, ...setB]);
console.log(union); // Set(5) { 1, 2, 3, 4, 5 }

//Intersection -> Find common values between two Sets.
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set(1) { 3 }

//Difference -> Find values in one Set that are not in the other.
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set(2) { 1, 2 }
