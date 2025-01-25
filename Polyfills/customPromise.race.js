const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello");
    }, 0)
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
//            a value which gets resolved/rejected first/lesser time

// let result = Promise.race([promise1, promise2, promise3]);
// result.then((data) => console.log(data));

function customRace(promisesArr) {
    const promise = new Promise((resolve, reject) => {

        promisesArr.forEach((promise) => {
            promise.then((value) => {
                resolve(value);// Resolve as soon as any promise resolves

            }).catch(error => {
                reject(error); // Reject as soon as any promise rejects
            })
        });
    })

    return promise;
}

let result1 = customRace([promise1, promise2, promise3]);
result1.then((data) => console.log(data));
