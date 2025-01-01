// Input: Array of promises
// Output: New promise

// Create a few promises with varying resolve times
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000)); // Resolves after 1 second
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Result 2"), 2000)); // Resolves after 2 seconds
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Result 3"), 1500)); // Resolves after 1.5 seconds

// Array containing all the promises
const promArray = [promise1, promise2, promise3];

/**
 * Promise.all:
 * - Waits for all promises in the array to either resolve or reject.
 * - If all promises resolve, it returns a new promise that resolves with an array of results.
 * - If any promise rejects, it immediately rejects with the reason of the first rejected promise.
 */
const promAll = Promise.all(promArray);
promAll.then((res) => console.log(res)) // Logs an array of results in the same order as promArray: ["Result 1", "Result 2", "Result 3"]
       .catch((err) => console.log(err)); // Logs the error if any promise rejects

/**
 * Promise.race:
 * - Returns a new promise that resolves or rejects as soon as the first promise in the array settles.
 * - The result or error is based on the outcome of the fastest promise.
 */
const promRace = Promise.race(promArray);
promRace.then((res) => console.log(res)) // Logs the result of the first settled promise. Here, "Result 1" (after 1 second)
        .catch((err) => console.log(err)); // Logs the error if the first settled promise rejects

/**
 * Promise.allSettled:
 * - Waits for all promises in the array to settle (either resolve or reject).
 * - Always resolves with an array of objects describing the outcome of each promise.
 *   - For resolved promises: { status: "fulfilled", value: <resolved_value> }
 *   - For rejected promises: { status: "rejected", reason: <error_reason> }
 */
const promAllSettled = Promise.allSettled(promArray);
promAllSettled.then((res) => console.log(res)) // Logs an array with the status and value/reason of each promise
              .catch((err) => console.log(err)); // Rarely used, as Promise.allSettled resolves even if all promises reject

/**
 * Promise.any:
 * - Resolves as soon as the first promise in the array resolves.
 * - If all promises reject, it rejects with an AggregateError containing the rejection reasons.
 * - Use this when you're interested in the first successful result and don't care about failures.
 */
const promAny = Promise.any(promArray);
promAny.then((res) => console.log(res)) // Logs the result of the first resolved promise. Here, "Result 1" (after 1 second)
       .catch((err) => console.log(err)); // Logs an AggregateError if all promises reject
