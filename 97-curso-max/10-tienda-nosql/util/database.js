const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log('Connected!');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
