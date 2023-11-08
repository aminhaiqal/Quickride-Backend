const { expect } = require('chai');
const authService = require('../../../src/authentication/services/user_service');

describe('Auth Service', function () {
  describe('#signUpWithEmailAndPassword()', function () {
    it('should return a user object when given valid email and password', async function () {
      const email = 'test@example.com';
      const password = 'password123';

      const user = await authService.signUpWithEmailAndPassword(email, password);

      expect(user).to.be.an('object');
      expect(user.email).to.equal(email);
      // Add more assertions based on the properties of your user object
    });
  });

  describe('#signInWithEmailAndPassword()', function () {
    it('should return a user object when given valid email and password', async function () {
      const email = 'test@example.com';
      const password = 'password123';

      const user = await authService.signInWithEmailAndPassword(email, password);

      expect(user).to.be.an('object');
      expect(user.email).to.equal(email);
      // Add more assertions based on the properties of your user object
    });
  });
});