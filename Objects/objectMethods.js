let product = {
    name: "Iphone 14 Pro",
    company: "Apple",
    price: 125000,
    warranty: "1 Year",
    color: "Black"
}

console.log( Object.keys(product));
console.log( Object.values(product));
console.log(Object.entries(product));
console.log(Object.keys(product).length); //No of key 

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
for (const key of Object.keys(obj)) {
    console.log(key);
}

for (const value of Object.values(obj)) {
    console.log(value);
}

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}