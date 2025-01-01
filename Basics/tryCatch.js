
function manualException() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 === 0) {
        // random number is even return randomNumber;
        console.log("Random number is even");
        return randomNumber;
    } else {
        // random number is odd
        throw "Random number is odd";
    }
}

function caller() {
    try {
        console.log("this is risky");
        const response = manualException();
        console.log("Risky code working fine", response);
    } catch (exception) {
        console.log("Bad Luck we are in catch");
        console.log(exception);
    }
}

caller();
