// Constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Adding method to Product prototype
Product.prototype.display = function () {
    return `${this.name} costs $${this.price}`;
};

// Creating instances
const laptop = new Product('Laptop', 999);
const phone = new Product('Phone', 699);

console.log(laptop.display()); // "Laptop costs $999"
console.log(phone.display());  // "Phone costs $699"

// Demonstrating prototype chain
console.log(laptop.toString()); // This comes from Object.prototype
console.log(laptop.__proto__ === Product.prototype); // true
console.log(laptop.__proto__.__proto__ === Object.prototype); // true
console.log(laptop.display === Product.prototype.display); // true