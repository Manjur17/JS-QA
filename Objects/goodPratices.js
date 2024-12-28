//Good Habit 1: Always Assign Default Values
const user = { name: "John" };
const { name, age = 25 } = user;

console.log(name); // "John"
console.log(age);  // 25 (default value)

//Good Habit 2: Use Default Values While Destructuring
const config = { timeout: undefined };
const { timeout = 5000 } = config; //avoids unexpected undefined values caused by properties not being explicitly set.

console.log(timeout); // 5000

//Good Habit 3: Destructure at the Top of Functions
function fetchData({ url, method = "GET", headers }) {
    console.log(url, method, headers);
}
fetchData({ url: "/api", headers: { Accept: "application/json" } });

//Good Habit 4: Use Variable Name Aliases
const user1 = { name: "Alice", age: 30 };
const { name: userName, age: userAge } = user1;

console.log(userName); // "Alice"
console.log(userAge);  // 30

//Good Habit 5: Watch for Shallow Copies
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };

shallowCopy.b.c = 42;
console.log(obj.b.c); // 42 (affected due to shallow copy)
//Solution:For deep copies, use methods like structuredClone, lodash.cloneDeep, or JSON.parse(JSON.stringify()).
