//set timeout and promises1 mixed questions
//1
console.log('First');

setTimeout(() => {
    console.log('Second');
    Promise.resolve().then(() => {
        console.log('Third');
        setTimeout(() => {
            console.log('Fourth');
            Promise.resolve().then(() => {
                console.log('Fifth');
            });
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Sixth');
    return Promise.resolve('Seventh').then((value) => {
        console.log(value);
    });
});

console.log('Eighth');

//2. 
console.log('Alpha');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => {
        console.log('Promise A in Timeout 1');
        return Promise.resolve().then(() => {
            console.log('Promise B in Timeout 1');
        });
    }).then(() => {
        console.log('Promise C in Timeout 1');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise D');
    setTimeout(() => {
        console.log('Timeout 2');
        Promise.resolve().then(() => {
            console.log('Promise E in Timeout 2');
        });
    }, 0);
});

console.log('Omega');

//3.
console.log('X');

Promise.resolve().then(() => {
    console.log('Y');
    setTimeout(() => {
        console.log('Z');
        Promise.resolve().then(() => {
            console.log('W');
            return Promise.resolve('V');
        }).then((value) => {
            console.log(value);
        });
    }, 0);
});

setTimeout(() => {
    console.log('Q');
    Promise.resolve().then(() => {
        console.log('R');
    });
}, 0);

console.log('S');

//4.
console.log('1');

Promise.resolve().then(() => {
    console.log('2');
    return Promise.resolve().then(() => {
        console.log('3');
        setTimeout(() => {
            console.log('4');
            Promise.resolve().then(() => {
                console.log('5');
            });
        }, 0);
    });
}).then(() => {
    console.log('6');
});

setTimeout(() => {
    console.log('7');
    Promise.resolve().then(() => {
        console.log('8');
    });
}, 0);

console.log('9');

//5. 
console.log('A');

Promise.resolve().then(() => {
    console.log('B');
    return Promise.resolve().then(() => {
        console.log('C');
        setTimeout(() => {
            console.log('D');
            Promise.resolve().then(() => {
                console.log('E');
            });
        }, 0);
    }).then(() => {
        console.log('F');
    });
}).then(() => {
    console.log('G');
});

setTimeout(() => {
    console.log('H');
    Promise.resolve().then(() => {
        console.log('I');
    });
}, 0);

console.log('J');

//6.
console.log('Start');

Promise.resolve().then(() => {
    console.log('Promise 1');
    return Promise.resolve('Promise 2').then((value) => {
        console.log(value);
        return Promise.resolve('Promise 3');
    }).then((value) => {
        console.log(value);
        setTimeout(() => {
            console.log('Timeout 1');
        }, 0);
        return 'Promise 4';
    });
}).then((value) => {
    console.log(value);
});

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

console.log('End');

//7.
console.log('First');

Promise.resolve().then(() => {
    console.log('Second');
    return Promise.resolve().then(() => {
        console.log('Third');
        setTimeout(() => {
            console.log('Fourth');
            Promise.resolve().then(() => {
                console.log('Fifth');
            });
        }, 0);
        return 'Sixth';
    });
}).then((value) => {
    console.log(value);
    return Promise.resolve().then(() => {
        console.log('Seventh');
        return 'Eighth';
    });
}).then((value) => {
    console.log(value);
});

console.log('Ninth');

//8.
console.log('Alpha');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => {
        console.log('Promise A');
        return Promise.resolve().then(() => {
            console.log('Promise B');
            return 'Promise C';
        }).then((value) => {
            console.log(value);
        });
    }).then(() => {
        console.log('Promise D');
        setTimeout(() => {
            console.log('Timeout 2');
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise E');
    return 'Promise F';
}).then((value) => {
    console.log(value);
});

console.log('Omega');

//9.
console.log('Start');

Promise.resolve().then(() => {
    console.log('Promise 1');
    return Promise.resolve().then(() => {
        console.log('Promise 2');
        return Promise.resolve('Promise 3');
    }).then((value) => {
        console.log(value);
        setTimeout(() => {
            console.log('Timeout 1');
        }, 0);
        return Promise.resolve('Promise 4');
    });
}).then((value) => {
    console.log(value);
});

setTimeout(() => {
    console.log('Timeout 2');
    Promise.resolve().then(() => {
        console.log('Promise 5');
    });
}, 0);

console.log('End');

//10.
console.log('Main');

Promise.resolve().then(() => {
    console.log('Step 1');
    return Promise.resolve().then(() => {
        console.log('Step 2');
        return Promise.resolve('Step 3');
    }).then((value) => {
        console.log(value);
        return Promise.resolve().then(() => {
            console.log('Step 4');
            return 'Step 5';
        });
    });
}).then((value) => {
    console.log(value);
    return Promise.resolve().then(() => {
        console.log('Step 6');
        setTimeout(() => {
            console.log('Timeout in Step 6');
        }, 0);
        return 'Step 7';
    });
}).then((value) => {
    console.log(value);
});

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

console.log('Final');

