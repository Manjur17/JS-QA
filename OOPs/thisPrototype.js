class Product {
    constructor(name) {
        this.name = name; // This initializes the instance property
    }

    display() {
        console.log(this); // Shared through the prototype
    }
}

const product = new Product("iPhone");

product.display(); //call site is product object { name: 'iPhone' }
Product.prototype.display(); //call site is that empty entity/object
product.__proto__.display(); //call site is that empty entity/object