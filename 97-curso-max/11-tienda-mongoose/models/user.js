const mongodb = require('mongodb');

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  save() {}

  addToCart(product) {}

  getCart() {}

  deleteItemFromCart(productId) {}

  addOrder() {}

  getOrders() {}

  static findById(userId) {}
}

module.exports = User;
