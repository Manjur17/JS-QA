let productPrice = 150000;

let productDiscount = 15;

let productName = "Apple Iphone 11 Pro max (512 GB, Blue)";

let isAvailable = false;

let minusZero = -0;

console.log(minusZero);

let x; //variable is declared and value is not defined(intentionally)

let y = null; //variable is declared and value is assigned

console.log(x);


let veryBigNumber = 57n;

console.log(veryBigNumber);

const mySym = Symbol("key1")

const JsUser = {
    name: "Manjur", //type of name is string
    "full name": "Manjur Ali",
    [mySym]: "mykey1", //type of mySym is string
    age: 18,
    location: "Pune",
    email: "manjur@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //accessing keys with [] we have to use " "
console.log(JsUser["full name"]) //JsUser.full name is not possible
console.log(JsUser[mySym])
console.log(JsUser.mySym) //gives undefined