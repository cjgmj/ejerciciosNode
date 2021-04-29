const expect = require('chai').expect;

const authMiddleware = require('../middleware/is-auth');

// Describe nos permite organizar los test en grupos
describe('Auth middleware', function () {
  it('should throw an error if no authorization header is present', function () {
    const req = {
      get: function (headerName) {
        return null;
      },
    };

    // No se puede llamar al método directamente, solo hay que pasar una referencia
    // e indicar los datos que se les pasan al métod mediante el método bind
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      'Not authenticated.'
    );
  });

  it('should throw an error if the autherization header is only one string', function () {
    const req = {
      get: function (headerName) {
        return 'xyz';
      },
    };

    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });
});
