class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    };

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    };
};

const salesTax = 0.05;

const product1 = new Product("Shirts", 19.99);
const product2 = new Product("Pants", 25.50);
const product3 = new Product("Hoodies", 100.00);

const total = product3.calculateTotal(salesTax);
console.log(`Total Price (with tax): ${total.toFixed(2)}`);