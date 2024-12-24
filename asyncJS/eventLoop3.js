setTimeout(() => {
    console.log('Timeout A'); //3
}, 0);

setTimeout(() => {
    console.log('Timeout B'); //4
    setTimeout(() => {
        console.log('Timeout C'); //6
    }, 0);
}, 0);

Promise.resolve().then(() => {
    console.log('Promise D'); //2
    setTimeout(() => {
        console.log('Timeout E'); //5
    }, 0);
});

console.log('Script End'); //1

//---------------------------------------
console.log('P1'); //1

setTimeout(() => {
    console.log('P2'); //3
    Promise.resolve().then(() => {
        console.log('P3'); //4 -> immediatley gets resolved so pushed to microtask queue
    });
}, 0);

setTimeout(() => {
    console.log('P4'); //5
}, 0);

console.log('P5'); //2

//---------------------------------
console.log('Main'); //1

setTimeout(() => {
    console.log('Timer 1'); //6
    setTimeout(() => {
        console.log('Timer 2'); //7
    }, 0);
}, 100);

setTimeout(() => {
    console.log('Timer 3'); //5
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1'); //3
}).then(() => {
    console.log('Promise 2'); //4
});

console.log('End'); //2

//--------------------------------
setTimeout(() => {
    console.log('Timeout 1'); //5
}, 10);

setTimeout(() => {
    console.log('Timeout 2');//4
}, 0);

Promise.resolve().then(() => {
    console.log('Promise A'); //2
}).then(() => {
    console.log('Promise B');//3
});

console.log('Execution End'); //1

//------------------------------------------
console.log('First'); //1

setTimeout(() => {
    console.log('Second'); //4
}, 0);

setTimeout(() => {
    console.log('Third'); //5
    setTimeout(() => {
        console.log('Fourth'); //6
    }, 0);
}, 0);

Promise.resolve().then(() => {
    console.log('Fifth'); //3
});
//2
console.log('Last'); //2
