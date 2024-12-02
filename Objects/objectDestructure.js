const product = { name: "Iphone 14 prp", price: 125000, category: "Mobiles" };

const purchasedProduct = {
    orderId: "xsya122", orderDate: "11/09/2024",
    ...product
};

//const { category } = product;
//const {categoryId} = category;

const { category: { categoryId } } = product; // 1 line destructure of nested objects

const {discount, ...productWithoutDiscount} = product; //rest opeartor for productWithoutDiscount
/*
//type of productWithoutDiscount is object
 product object's discount key will not be part of 
 productWithoutDiscount variable. In the productWithoutDiscount variable 
 everything else coming from an object is combined into one and stored
*/ 