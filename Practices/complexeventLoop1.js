console.log('Start');//1

setTimeout(() => {
    console.log('Timeout 1'); //6
    Promise.resolve().then(() => {
        console.log('Promise in Timeout 1'); //7
    });
}, 10);

Promise.resolve().then(() => {
    console.log('Promise 1'); //3
    setTimeout(() => {
        console.log('Timeout in Promise 1'); //5
    }, 0);
}).then(() => {
    console.log('Promise 2'); //4
});

setTimeout(() => {
    console.log('Timeout 2'); //4
}, 0);

console.log('End'); //2

//---------------------------------------------------------
setTimeout(() => {
    console.log('Timeout 1'); //3

    Promise.resolve().then(() => {
        console.log('Promise A in Timeout 1'); //4
        setTimeout(() => {
            console.log('Timeout in Promise A'); //8
        }, 0);
    });
}, 0);

setTimeout(() => {
    console.log('Timeout 2'); //5
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1'); //2
    setTimeout(() => {
        console.log('Timeout in Promise 1'); //6
        Promise.resolve().then(() => {
            console.log('Nested Promise in Timeout'); //7
        });
    }, 0);
});

console.log('Main Execution'); //1

//--------------------------------------------------
console.log('A'); //1

setTimeout(() => {
    console.log('B'); //5
    setTimeout(() => {
        console.log('C'); //8
    }, 0);

    Promise.resolve().then(() => {
        console.log('D'); //6
        setTimeout(() => {
            console.log('E'); //9
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('F'); //3
    setTimeout(() => {
        console.log('G'); //7
    }, 0);
}).then(() => {
    console.log('H'); //4
});

console.log('I'); //2

//--------------------------------------------
console.log('First'); //1

setTimeout(() => {
    console.log('Second'); //6
    Promise.resolve().then(() => {
        console.log('Third'); //7
        setTimeout(() => {
            console.log('Fourth'); //9
        }, 0);
    });
}, 0);

setTimeout(() => {
    console.log('Fifth'); //8
}, 0);

Promise.resolve().then(() => {
    console.log('Sixth'); //3
    Promise.resolve().then(() => {
        console.log('Seventh'); //4
    });
}).then(() => {
    console.log('Eighth'); //5
});

console.log('Last'); //2

//-----------------------------------------------
setTimeout(() => {
    console.log('Timeout 1'); //4
    setTimeout(() => {
        console.log('Timeout 2'); //8
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise A'); //5
        setTimeout(() => {
            console.log('Timeout 3'); //9
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise B'); //2
    setTimeout(() => {
        console.log('Timeout 4'); //6
        Promise.resolve().then(() => {
            console.log('Promise C'); //7
        });
    }, 0);
}).then(() => {
    console.log('Promise D'); //3
});

console.log('Main Task'); //1

//-------------------------------------------
setTimeout(() => {
    console.log('Outer Timeout'); //3

    Promise.resolve().then(() => {
        console.log('Outer Promise'); //4
        setTimeout(() => {
            console.log('Nested Timeout'); //7
            Promise.resolve().then(() => {
                console.log('Nested Promise'); //8
            });
        }, 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('First Promise'); //2
    setTimeout(() => {
        console.log('Second Timeout'); //5
        Promise.resolve().then(() => {
            console.log('Second Promise'); //6
        });
    }, 0);
});

console.log('Script End'); //1

//-----------------------------------------
console.log('Init'); //1

setTimeout(() => {
    console.log('Timeout A');//4
    setTimeout(() => {
        console.log('Timeout B'); //7
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise A'); //5
        Promise.resolve().then(() => {
            console.log('Promise B'); //6
        });
    });
}, 10);

setTimeout(() => {
    console.log('Timeout C'); //3
}, 0);

console.log('Finish'); //2  

//-----------------------------------------
console.log('Step 1'); //1

setTimeout(() => {
    console.log('Step 2'); //7
    Promise.resolve().then(() => {
        console.log('Step 3'); //8
        setTimeout(() => {
            console.log('Step 4'); //9
        }, 0);
    });
}, 10);

Promise.resolve().then(() => {
    console.log('Step 5'); //3
}).then(() => {
    console.log('Step 6'); //4
    setTimeout(() => {
        console.log('Step 7'); //6
    }, 0);
});

setTimeout(() => {
    console.log('Step 8'); //5
}, 0);

console.log('Step 9'); //2

//--------------------------------------
console.log('Alpha'); //1

Promise.resolve().then(() => {
    console.log('Beta'); //3
    setTimeout(() => {
        console.log('Gamma'); //7
        Promise.reject().catch(() => {
            console.log('Delta'); //8
        });
    }, 0);
}).then(() => {
    console.log('Epsilon'); //4
});

setTimeout(() => {
    console.log('Zeta'); //5
    Promise.reject().catch(() => {
        console.log('eta'); //6
    });

}, 0);

console.log('Omega'); //2
