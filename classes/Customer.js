const Cart = require("./Cart");

class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = [];
  }

  addToOrderHistory(cart) {
    if (!(cart instanceof Cart)) return;
    this.orderHistory.push(cart);
  }
}

module.exports = Customer;
