const expect = require('chai').expect;

const authMiddleware = require('../middleware/is-auth');

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
