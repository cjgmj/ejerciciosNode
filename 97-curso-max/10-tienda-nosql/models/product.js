const mongobd = require('mongodb');

const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection('products')
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return (
      db
        .collection('products')
        .find()
        // Es necesario llamar este método para que te devuelva los documentos,
        // en caso contrario habría que iterarlos llamando a la función next
        .toArray()
        .then((result) => {
          console.log(result);
          return result;
        })
        .catch((err) => console.log(err))
    );
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongobd.ObjectId(prodId) })
      .next()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
