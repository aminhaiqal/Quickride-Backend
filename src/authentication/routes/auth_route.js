const express = require('express');
const routes = express.Router();
const auth_middleware = require('../middlewares/auth_middleware');

routes.post('/login', (req, res) => {
  res.send('Login Page');
});

routes.post('/signup', auth_middleware.checkUniquePhoneNum, auth_middleware.createUser ,(req, res) => {
  res.send('Signup Page');
});

routes.post('/logout', (req, res) => {
  res.send('Logout Page');
});

routes.post('/reset-password', (req, res) => {
  res.send('Reset Password Page');
});

routes.post('/reset-password/confirm', (req, res) => {
  res.send('Confirm Reset Password Page');
});

routes.get('/profile', (req, res) => {
  res.send('Profile Page');
});

routes.put('/profile', (req, res) => {
  res.send('Update Profile Page');
});

routes.post('/change-password', (req, res) => {
  res.send('Change Password Page');
});

routes.post('/deactivate', (req, res) => {
  res.send('Deactive Page');
});

routes.post('/2fa/setup', (req, res) => {
  res.send('Two-Factor Authentication Page');
});

routes.post('/2fa/verify', (req, res) => {
  res.send('Two-Factor Verify Page');
});

routes.post('/token/refresh', (req, res) => {
  res.send('Refresh Token Page');
});

routes.post('/token/revoke', (req, res) => {
  res.send('Revoke Token Page');
});

routes.post('/oauth/{provider}', (req, res) => {
  res.send('OAuth Provider Page');
});

routes.get('/audit-log', (req, res) => {
  res.send('Audit Log Page');
});

module.exports = routes;