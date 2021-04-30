const expect = require('chai').expect;
const sinon = require('sinon');

const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller - Login', function () {
  it('should throw an error with code 500 if accessing the database fails', function (done) {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester',
      },
    };

    AuthController.login(req, {}, () => {}).then((result) => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);

      // Para probar código asíncrono es necesario pasar por
      // argumentos la función y llamarla una vez terminados
      // los tests
      done();
    });

    User.findOne.restore();
  });

  it('should send a response with a valid user status for and existing user', function (done) {
    mongoose
      .connect(
        'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net/test-messages?retryWrites=true&w=majority'
      )
      .then(() => {
        const user = new User({
          email: 'test@test.com',
          password: 'tester',
          name: 'Test',
          posts: [],
        });
      })
      .catch((err) => console.log(err));
  });
});
