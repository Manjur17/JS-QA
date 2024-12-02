//Class as wrappers on function

function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;

    this.displayProduct = function () {
        console.log("Name:", this.name, "Price", this.price, "description:", this.description);
    }
}

let iphone = new Product("Iphone 11", 900, "Apple iphone 11");
iphone.displayProduct();

//---------Concept-----------

let iphone2 =  Product("Iphone 11", 900, "Apple iphone 11"); //normal function call and we are not returning anything
//now this becomes
function Product() {
    //The call site is global, so this refers to the global object (window in browsers, global in Node.js).
    console.log(this); //different for different runtime
    //...code
}
