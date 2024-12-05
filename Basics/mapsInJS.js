// Unlike regular JavaScript objects, a Map can have keys of any type, 
//including objects, functions, and primitive types.

const map = new Map();

// Adding key-value pairs -> stored as array of array [[key,value], [key,value], ...]
map.set("name", "Alice");
map.set("age", 25);
map.set({ city: "New York" }, "Address Object");

// Retrieving values
console.log(map.get("name")); // Alice
console.log(map.get("age"));  // 25

// Checking existence of keys
console.log(map.has("name")); // true

// Getting the size of the Map
console.log(map.size); // 3

// Deleting a key-value pair
map.delete("age");
console.log(map.size); // 2

// Clearing all entries
map.clear();
console.log(map.size); // 0

//iterating over map
const map1 = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"]
]);

for (const [key, value] of map1) {
    console.log(`${key}: ${value}`);
}
map1.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 25
// city: New York

console.log("Keys:", [...map1.keys()]);
console.log("Values:", [...map1.values()]);
console.log("Entries:", [...map1.entries()]);

