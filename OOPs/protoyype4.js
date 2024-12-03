class Product {
    constructor(name) {
        this.name = name; // This initializes the instance property
        this.display = () => {
            console.log("Product inside constructor");
        }
    }

    display() {
        console.log(`Product: ${this.name}`); // Shared through the prototype
    }
}

const product = new Product("iPhone");
product.display(); //now display() in available inside the product object.