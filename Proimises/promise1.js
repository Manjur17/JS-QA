const promise = new Promise(
    //executorFunction or executorCallback
    function executorFunction() {
        console.log("Executor callback triggered by Promise constructor");// prints first
        //promise are native js code so any larger blocking code will delay the execution 
        for (let i = 0; i < 10000000000; i++) { }
    }
)

console.log("Created the promise object"); //prints 2nd
console.log(promise); //pending as no resolve or reject is called

//creating a promise
const pr = new Promise(function exec(res, rej) {
    console.log("Executor callback triggered by Promise constructor");
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 === 0) {
        // random number is even
        res();
    } else {
        // random number is odd
        rej();
    }
});

console.log("Created the promise object");
console.log(pr);