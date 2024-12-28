function sum(fun) {
    return function (...someArgs) {//this args is accessed here(someArgs) 
        console.log("Arguments passed:", someArgs); //"hi", 1, 2, 3, 4, 5
        fun(...someArgs); //fun and called and same args(someArgs) is passed to that function
    };
}

//returning modified function
sum((...args) => {
    console.log("Callback called with:", args);
    //do something with args(someArgs)
})("hi", 1, 2, 3, 4, 5); //this args is passed here(someArgs)