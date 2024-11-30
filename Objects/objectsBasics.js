
// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh", //type of name is string
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //type of mySym is string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //accessing keys with [] we have to use " "
console.log(JsUser["full name"]) //JsUser.full name is not possible
console.log(JsUser[mySym])
console.log(JsUser.mySym) //gives undefined

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) -> cannot change the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}

//this with same object
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());