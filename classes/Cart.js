const Product = require("./Product");

class Cart {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addProduct(product) {
    if (!(product instanceof Product)) return;

    this.products.push(product);
    this.total += product.price;
  }

  removeProduct(productIndex) {
    this.total -= this.products[productIndex]["price"];
    this.products = this.products.filter(
      (item, index) => productIndex !== index
    );
  }
}

module.exports = Cart;
