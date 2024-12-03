
// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "manjur", //type of name is string
    "full name": "manjur Aai",
    [mySym]: "mykey1", //type of mySym is string
    age: 18,
    location: "pune",
    email: "manjur@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //accessing keys with [] we have to use " "
console.log(JsUser["full name"]) //JsUser.full name is not possible
console.log(JsUser[mySym])
console.log(JsUser.mySym) //gives undefined

if ("location" in JsUser) {
    delete JsUser.location; // Deletes the 'location' key
    console.log("'location' key deleted.");
} 

JsUser.email = "manjur@chatgpt.com"
// Object.freeze(JsUser) -> cannot change the object
JsUser.email = "manjur@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}

//this with same object
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());