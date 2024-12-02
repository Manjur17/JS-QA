function Person(name) {
    this.name = name;
    setTimeout(() => {
        console.log(`Hello, ${this.name}`);
    }, 1000);
}

//plain obj({}) is created and since Person() doesnot return anything
//this = {name: "Alice"}
//for the arrow function in setTimeOut lexically this is found 
//and this is found inside Person(), so this = {name: "Alice"}
//this is same for the arrow function
new Person("Alice"); // Outputs: Hello, Alice
