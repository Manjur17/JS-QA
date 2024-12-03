function Product(name) {
    this.name = name;

    this.display = () => {
        console.log(this); // Shared through the prototype
    }
}

const product = new Product("iPhone");
//call display() inside the product object
product.display(); //Product { name: 'iPhone', display: [Function (anonymous)] }

//add display inside the prototype of Product
Product.prototype.display = function () {
   console.log("display function inside Product.prototype: ", this);
};

product.__proto__.display(); //call site is that empty entity/object