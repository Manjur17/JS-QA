const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello1");
    }, 10)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello2");
    }, 100)
})

//input -> array of promises
//output -> an promise 
//         if all are fulfilled ->  array of resolved promises if all are resolved
//         if anyone gets rejected -> throws error if any promise gets rejected.

let result = Promise.all([promise1, promise2, promise3]);
result.then((data) => console.log(data));

function customAll(promisesArr) {
    let results = []; //to store results 
    let promiseResolved = 0; //track of promises resolved so far

    const promise = new Promise((resolve, reject) => {

        promisesArr.forEach((promise, index) => {
            promise.then((value) => {
                results[index] = value; //index and not push so that we return ans in same order irrective of time each promise takes to reolves
                promiseResolved++;

                //all promises are reolved
                //doing promisesArr.length - 1 == index gives inappropriate result
                if (promiseResolved == promisesArr.length) {
                    resolve(results); //return array of resolved promises
                }
            }).catch(error => reject(error)) //any promise throws error
        });
    })

    return promise;
}

let result1 = customAll([promise1, promise2, promise3]);
result1.then((data) => console.log(data));
