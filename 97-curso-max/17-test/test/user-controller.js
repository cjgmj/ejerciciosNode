const expect = require('chai').expect;
const sinon = require('sinon');

const mongoose = require('mongoose');

const User = require('../models/user');
const UserController = require('../controllers/user');

describe('User Controller', function () {
  // Se ejecuta antes de ejecutar todos los tests
  before(function (done) {
    mongoose
      .connect(
        'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net/test-messages?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        const user = new User({
          email: 'test@test.com',
          password: 'tester',
          name: 'Test',
          posts: [],
          _id: '5c0f66b979af55031b34728a',
        });

        return user.save();
      })
      .then(() => done())
      .catch((err) => console.log(err));
  });

  // Se ejecuta después de ejecutar todos los tests
  after(function (done) {
    User.deleteMany({})
      .then(() => mongoose.disconnect())
      .then(() => done());
  });

  // Se ejecuta antes de ejecutar cada test
  beforeEach(function () {});

  // Se ejecuta después de ejecutar cada test
  afterEach(function () {});

  it('should send a response with a valid user status for and existing user', function (done) {
    const req = { userId: '5c0f66b979af55031b34728a' };
    const res = {
      statusCode: 500,
      userStatus: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.userStatus = data.status;
      },
    };

    UserController.getStatus(req, res, () => {}).then(() => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.userStatus).to.be.equal('I am new!');
      done();
    });
  });
});
