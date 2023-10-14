const { signup } = require('../services/authService');

async function signupController(req, res) {
  const { email, password } = req.body;

  try {
    // Call the signup function from the auth module
    const user = await signup(email, password);

    // Redirect to the login page after successful signup
    res.redirect('/login');
  } catch (error) {
    console.error('Error creating user:', error);
    res.redirect('/signup'); // Redirect back to the signup page on failure
  }
}

module.exports = { signupController };
