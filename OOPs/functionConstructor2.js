function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
}

let iphone = new Product("Iphone 11", 900, "Apple iphone 11");
//iphone.displayProduct(); //2 way to resolve this error
//1st using propotype directly
Product.prototype.displayProduct = function () {
    console.log("Name:", this.name, "Price", this.price, "description:", this.description);
}
iphone.displayProduct();

//2nd changing prototype of iphone from Product.prototype to Product
function Product1(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    Object.setPrototypeOf(this, Product1);
}

let iphone1 = new Product1("Iphone 11", 900, "Apple iphone 11");
Product1.displayProduct = function () {
    console.log("Name:", this.name, "Price", this.price, "description:", this.description);
}

iphone1.displayProduct();