function fun(fn) {
    console.log("Welcome to fun");
    fn();
}

fun(function askingAboutFun() {
    console.log("Wow so much fun");
})

// for recursive cases named function expression are also helpful
