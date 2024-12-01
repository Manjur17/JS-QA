class Product {
    #name;
    #price;
    category;
    description;
    rating;
    
    //point 4 of how new works
    constructor() {
        //same behaviour when we return array or function
        return { x: 10 };
    }

    getPrice() {
        return this.#price;
    }

    setPrice(p) {
        console.log("Invalid price");
    }

    addToCart() {
        console.log("Product added to cart");
    }

    removeFromCart() {
        console.log("Product removed from cart");
    }

    displayProduct() {
        console.log("Product displayed", this.#name, this.#price, this.category, this.description, this.rating);
    }

    buyProduct() {
        console.log("Product bought");
    }

}

let iphone = new Product();
console.log(iphone);
