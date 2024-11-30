console.log("start");

for (let i = 0; i < 10000; i++) {
    //runtime and event queue and event loop
    setTimeout(function exec() {

    }, 10)
}

for (let i = 0; i < 100000000000; i++) {
    //some code    
}

console.log("end");

