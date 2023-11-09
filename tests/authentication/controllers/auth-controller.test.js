import { expect } from 'chai';
import AuthService from '../../../src/authentication/services/user_service.js';

const auth = new AuthService();

describe('Auth Service', function () {
  describe('#signUpWithEmailAndPassword()', function () {
    it('should return a user object when given valid email and password', async function () {
      const email = 'test@example.com';
      const password = 'password123';

      auth.signUpWithEmailAndPassword(email, password)
        .then(user => {
          expect(user).to.be.an('object');
          expect(user.email).to.equal(email);
          // Add more assertions based on the properties of your user object
        })
        .catch(err => done(err));
    });
  });

  describe('#signInWithEmailAndPassword()', function () {
    it('should return a user object when given valid email and password', async function () {
      const email = 'test@example.com';
      const password = 'password123';

      auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        expect(user).to.be.an('object');
        expect(user.email).to.equal(email);
        // Add more assertions based on the properties of your user object
      })
      .catch(err => done(err));
    });
  });
});