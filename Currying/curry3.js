function evaluate(operation) {
    //returns closure functions
    return function (b) {
        return function (c) {
            switch (operation) {
                case "add":
                    return b + c;
                case "multiply":
                    return b * c;
                case "subtract":
                    return c - b;
                case "divide":
                    return c / b;
                default:
                    return "Invalid operation";
            }
        }
    }
}
const multi = evaluate("multiply");
console.log(multi(2)(3));
