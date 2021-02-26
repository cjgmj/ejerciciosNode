const mongodb = require('mongodb');

class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
  }

  save() {}

  static fetchAll() {}

  static findById(prodId) {}

  static deleteById(prodId) {}
}

module.exports = Product;
