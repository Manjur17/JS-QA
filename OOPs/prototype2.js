/**Changes made to the prototype of a JavaScript object are immediately reflected in all instances, 
 * including the ones that were created before the prototype was modified. 
 * This is because objects in JavaScript do not copy the prototype; they maintain a reference to it.
 */
function Product(name) {
    this.name = name;
}

// Step 1: An empty object is created.
// Step 2: The object is linked to `Product.prototype`.
// Step 3: `this` inside the constructor points to the new object(plain object {}), and properties are assigned.
// Step 4: The new object is returned because the constructor does not explicitly return another object.
// Add a method to the prototype
Product.prototype.display = function () {
    console.log(`Product: ${this.name}`);
};

// Create an instance
const product1 = new Product("Phone");

// Call the method
product1.display(); // Outputs: Product: Phone

// Modify the prototype (after the instance was created)
Product.prototype.display = function () {
    console.log(`Updated Product: ${this.name}`);
};

// Call the method again on the same instance
product1.display(); // Outputs: Updated Product: Phone
