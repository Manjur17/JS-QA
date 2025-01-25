const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
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
//           array of  [ { status: '', value: '' }]

let result = Promise.allSettled([promise1, promise2, promise3]);
result.then((data) => console.log(data));

function customAllSettled(promisesArr) {
    let results = []; //to store results 
    let promiseResolvedOrRejected = 0; //track of promises reolved so far

    const promise = new Promise((resolve, reject) => {

        promisesArr.forEach((promise, index) => {
            promise.then((value) => {
                results[index] = {
                    status: 'fulfilled',
                    value: value
                };

                promiseResolvedOrRejected++;
                if (promiseResolvedOrRejected == promisesArr.length) {
                    resolve(results);
                }

            }).catch((error) => {
                results[index] = {
                    status: 'rejected',
                    reason: error
                }
                promiseResolvedOrRejected++;
                if (promiseResolvedOrRejected == promisesArr.length) {
                    resolve(results);
                }
            })

        });
    })

    return promise;
}

let result1 = customAllSettled([promise1, promise2, promise3]);
result1.then((data) => console.log(data));
