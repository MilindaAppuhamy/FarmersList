const Customer = require("./Customer");

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    const customer = new Customer(name, email, shippingAddress);
    this.customers.push(customer);
  }

  login(email) {
    let authenticated = null;
    for (let customer of this.customers) {
      if (customer.email === email) {
        authenticated = customer;
      }
    }
    return authenticated;
  }
}

module.exports = Auth;
