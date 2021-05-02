const expect = require('chai').expect;

const mongoose = require('mongoose');

const User = require('../models/user');
const FeedController = require('../controllers/feed');

describe('Feed Controller', function () {
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

  after(function (done) {
    User.deleteMany({})
      .then(() => mongoose.disconnect())
      .then(() => done());
  });

  it('should add a created post to the posts of the creator', function (done) {
    const req = {
      userId: '5c0f66b979af55031b34728a',
      body: {
        title: 'Test Post',
        content: 'A Test Post',
      },
      file: {
        path: 'abc',
      },
    };
    const res = {
      status: function () {
        return this;
      },
      json: function () {},
    };

    FeedController.createPost(req, res, () => {}).then((savedUser) => {
      expect(savedUser).to.have.property('posts');
      expect(savedUser.posts).to.have.length(1);
      done();
    });
  });
});
