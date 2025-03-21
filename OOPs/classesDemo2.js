class Product {
    #name; //private 
    #price; //private
    category;
    description;
    rating;

    /*
    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        //just initialize the keys/data member and not the value(value is undefined)
        //but if we don't give any data member, then the object remains empty(Product {})
        Product {
            category: undefined,
            description: undefined,
            rating: undefined
        } 
    }
    */

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.#name = productName;
        if (productPrice > 0 && typeof (productPrice) === "number") {
            this.#price = productPrice;
        }
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(p) {
        if (p > 0) {
            this.#price = p;
        } else {
            console.log("Invalid price");
        }
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

let iphone = new Product("Iphone 11", 900, "Electronics", "Apple Iphone 11", 4.5);

console.log(iphone);

//manually setting value just like normal object
// iphone.name = "Iphone 13"; //as name is private now inside class, so #name and name are different keys in iphone object
// iphone.price = -1000;
// iphone.category = "Electronics";

// iphone.setPrice(-1000);

// iphone.displayProduct();

// console.log(iphone.getPrice())
