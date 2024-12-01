class Counter {
    constructor() {
        this.count = 0;
    }
    
    //normal function increment
    increment() {
        setTimeout(() => {
            this.count++;
            console.log(this.count); // `this` refers to Counter instance
        }, 1000);
    }
}

const counter = new Counter();
counter.increment(); // Outputs: 1 (after 1 second)

