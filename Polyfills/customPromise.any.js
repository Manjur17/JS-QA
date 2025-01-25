const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello");
    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello1");
    }, 10)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello2");
    }, 100)
})

//input -> array of promises
//output -> an promise with
//            a value if anyone gets resolved 
//            if all gets rejected throws error 
// triggerUncaughtException(err, true /* fromPromise */);
// [AggregateError: All promises were rejected] {
//   [errors]: [ 'value1', 'value2', 'value3' ]
// }

// let result = Promise.any([promise1, promise2, promise3]);
// result.then((data) => console.log(data));

function customAny(promisesArr) {
    let results = []; //to store results 
    let promiseResolvedOrRejected = 0; //track of promises reolved so far

    const promise = new Promise((resolve, reject) => {

        promisesArr.forEach((promise, index) => {

            promise.then((value) => {
                resolve(value);
                promiseResolvedOrRejected++;

            }).catch((error) => {
                results[index] = error;
                promiseResolvedOrRejected++;

                // If all promises are settled and none resolved, reject the main promise
                if (promiseResolvedOrRejected == promisesArr.length) {
                    reject(new AggregateError(results, "All promises were rejected"));
                }
            })

        });
    })

    return promise;
}

let result1 = customAny([promise1, promise2, promise3]);
result1.then((data) => console.log(data))
