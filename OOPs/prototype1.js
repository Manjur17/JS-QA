class Product {

    constructor(name) {
        this.name = name; // This initializes the instance property
    }

    display() {
        console.log(`Product: ${this.name}`); // Shared through the prototype
    }
}

const product = new Product("iPhone");
product.display(); //now display() in available inside the product object.

//Internally, this is equivalent to:

function Product(name) {
    this.name = name;
}

Product.prototype.display = function () {
    console.log(`Product: ${this.name}`);
};

