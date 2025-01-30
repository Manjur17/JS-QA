//prototype pollution
const key = "__proto__";
const payload = { admin: true };

// Polluting the prototype
Object.prototype[key] = payload;

const user = {};
console.log(user.admin); // true, because the prototype was polluted