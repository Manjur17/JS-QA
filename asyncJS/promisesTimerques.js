//set timeout and promises1 mixed questions
//1
console.log('First'); //1

setTimeout(() => {
    console.log('Second'); //5
    Promise.resolve().then(() => {
        console.log('Third'); //6
        setTimeout(() => {
            console.log('Fourth'); //7
            Promise.resolve().then(() => {
                console.log('Fifth'); //8
            });
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Sixth'); //3
    return Promise.resolve('Seventh').then((value) => {
        console.log(value); //4 -> Seventh
    });
});

console.log('Eighth'); //2

//2. 
console.log('Alpha'); //1

setTimeout(() => {
    console.log('Timeout 1'); //4
    Promise.resolve().then(() => {
        console.log('Promise A in Timeout 1'); //5
        return Promise.resolve().then(() => {
            console.log('Promise B in Timeout 1'); //6
        });
    }).then(() => {
        console.log('Promise C in Timeout 1'); //7
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise D'); //3
    setTimeout(() => {
        console.log('Timeout 2'); //8
        Promise.resolve().then(() => {
            console.log('Promise E in Timeout 2'); //9
        });
    }, 0);
});

console.log('Omega'); //2

//3.
console.log('X'); //1

Promise.resolve().then(() => {
    console.log('Y'); //3
    setTimeout(() => {
        console.log('Z');//6
        Promise.resolve().then(() => {
            console.log('W'); //7
            return Promise.resolve('V');
        }).then((value) => {
            console.log(value); //8 -> 'V'
        });
    }, 0);
});

setTimeout(() => {
    console.log('Q'); //4
    Promise.resolve().then(() => {
        console.log('R'); //5
    });
}, 0);

console.log('S'); //2

//4.
console.log('1'); //1

Promise.resolve().then(() => {
    console.log('2'); //3
    return Promise.resolve().then(() => {
        console.log('3'); //4
        //this timer goes to queue and this promise execution is over so the then() is pushed to microtask queue
        setTimeout(() => {
            console.log('4'); //8
            Promise.resolve().then(() => {
                console.log('5'); //9
            });
        }, 0);
    });
}).then(() => {
    console.log('6'); //5
});

setTimeout(() => {
    console.log('7'); //6
    Promise.resolve().then(() => {
        console.log('8'); //7
    });
}, 0);

console.log('9'); //2

//5. 
console.log('A');//1

Promise.resolve().then(() => {
    console.log('B'); //3
    return Promise.resolve().then(() => {
        console.log('C'); //4
        setTimeout(() => {
            console.log('D'); //9 
            Promise.resolve().then(() => {
                console.log('E'); //10
            });
        }, 0);
    }).then(() => {
        console.log('F'); //5
    });
}).then(() => {
    console.log('G'); //6
});

setTimeout(() => {
    console.log('H'); //7
    Promise.resolve().then(() => {
        console.log('I'); //8
    });
}, 0);

console.log('J'); //2

//6.
console.log('Start'); //1

Promise.resolve().then(() => {
    console.log('Promise 1'); //3
    return Promise.resolve('Promise 2').then((value) => {
        console.log(value); //4 -> Promise 2
        return Promise.resolve('Promise 3');
    }).then((value) => {
        console.log(value); //5 -> Promise 3
        setTimeout(() => {
            console.log('Timeout 1'); //8
        }, 0);
        return 'Promise 4';
    });
}).then((value) => {
    console.log(value); //6 -> Promise 4
});

setTimeout(() => {
    console.log('Timeout 2'); //7
}, 0);

console.log('End'); //2

//7.
console.log('First'); //1

Promise.resolve().then(() => {
    console.log('Second'); //3
    return Promise.resolve().then(() => {
        console.log('Third'); //4
        setTimeout(() => {
            console.log('Fourth'); //9
            Promise.resolve().then(() => {
                console.log('Fifth'); //10
            });
        }, 0);
        return 'Sixth'; //5
    });
}).then((value) => {
    console.log(value); //6 -> Sixth
    return Promise.resolve().then(() => {
        console.log('Seventh'); //7
        return 'Eighth';
    });
}).then((value) => {
    console.log(value); //8 -> Eighth
});

console.log('Ninth'); //2

//8.
console.log('Alpha'); //1

setTimeout(() => {
    console.log('Timeout 1'); //5
    Promise.resolve().then(() => {
        console.log('Promise A'); //6
        return Promise.resolve().then(() => {
            console.log('Promise B'); //7
            return 'Promise C';
        }).then((value) => {
            console.log(value); //8 -> Promise C
        });
    }).then(() => {
        console.log('Promise D'); //9
        setTimeout(() => {
            console.log('Timeout 2'); //10
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise E'); //3
    return 'Promise F';
}).then((value) => {
    console.log(value); //4 -> Promise F
});

console.log('Omega'); //2

//9.
console.log('Start'); //1

Promise.resolve().then(() => {
    console.log('Promise 1'); //3
    return Promise.resolve().then(() => {
        console.log('Promise 2'); //4
        return Promise.resolve('Promise 3');
    }).then((value) => {
        console.log(value); //5 -> Promise 3
        setTimeout(() => {
            console.log('Timeout 1'); //9
        }, 0);
        return Promise.resolve('Promise 4');
    });
}).then((value) => {
    console.log(value); //6 -> Promise 4
});

setTimeout(() => {
    console.log('Timeout 2'); //7
    Promise.resolve().then(() => {
        console.log('Promise 5'); //8
    });
}, 0);

console.log('End'); //2

//10.
console.log('Main'); //1

Promise.resolve().then(() => {
    console.log('Step 1'); //3
    return Promise.resolve().then(() => {
        console.log('Step 2'); //4
        return Promise.resolve('Step 3');
    }).then((value) => {
        console.log(value); //5 -> Step 3
        return Promise.resolve().then(() => {
            console.log('Step 4');
            return 'Step 5'; //6 -> Step 4
        });
    });
}).then((value) => {
    console.log(value); //7 -> Step 5
    return Promise.resolve().then(() => {
        console.log('Step 6'); //8
        setTimeout(() => {
            console.log('Timeout in Step 6'); //11
        }, 0);
        return 'Step 7';
    });
}).then((value) => {
    console.log(value); //9 -> Step 7
});

setTimeout(() => {
    console.log('Timeout 1'); //10
}, 0);

console.log('Final'); //2
