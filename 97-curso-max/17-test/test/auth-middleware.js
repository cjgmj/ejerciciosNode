const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

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

  it('should throw an error if the token cannot be verified', function () {
    const req = {
      get: function (headerName) {
        return 'Bearer xyz';
      },
    };

    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it('should yield a userId after decoding the token', function () {
    const req = {
      get: function (headerName) {
        return 'Bearer xyz';
      },
    };

    // No es recomendable de esta forma ya que si se usa el método
    // más abajo al sobrescribirlo puede fallar o provocar que
    // no lance errores
    // jwt.verify = function () {
    //   return { userId: 'abc' };
    // };

    sinon.stub(jwt, 'verify');
    jwt.verify.returns({ userId: 'abc' });

    authMiddleware(req, {}, () => {});

    expect(req).to.have.property('userId');
    expect(req).to.have.property('userId', 'abc');
    expect(jwt.verify.called).to.be.true;

    // Restaura la función original
    jwt.verify.restore();
  });
});
