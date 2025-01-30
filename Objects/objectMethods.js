let product = {
    name: "Iphone 14 Pro",
    company: "Apple",
    price: 125000,
    warranty: "1 Year",
    color: "Black"
}

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
console.log(Object.keys(product).length); //No of key 
console.log("propety: ", Object.getOwnPropertyNames(product)); //array of all properties

console.log("getOwnPropertyDescriptor: ", Object.getOwnPropertyDescriptor(product, "name"))
/*
return getOwnPropertyDescriptor:  {
  value: 'Iphone 14 Pro',
  writable: true, //can change the value
  enumerable: true, //can be iterated in for in
  configurable: true //can delete or change settings
}
*/
Object.defineProperty(product, "name", { writable: false, configurable: false }); // we changed the "name" propert descriptor

//if we add new key using definePropety then by default configurable, enumerable, writable is false which is opposite of normal way 
Object.defineProperty(product, "version", { value: "2" }); // we changed the "name" propert descriptor

//loop in objects
for (let key in product) { //for..in
    console.log(`${key}: ${product[key]}`);
}

Object.keys(product).forEach(key => {
    console.log(`${key}: ${product[key]}`);
});

Object.values(product).forEach(value => {
    console.log(value);
});

Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

//looping over arrays
for (const key of Object.keys(product)) {
    console.log(key);
}

for (const value of Object.values(product)) {
    console.log(value);
}

for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
}