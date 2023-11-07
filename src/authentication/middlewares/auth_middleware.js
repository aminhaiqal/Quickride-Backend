function checkUniquePhoneNum(req, res, next) {
  const { phone_num } = req.body;

  if (isPhoneNumTaken(phone_num)) {
    return res.status(409).json({ message: 'Phone Number already in use' });
  }

  next();
}

function createUser(req, res, next) {
  const { email, password } = req.body;

  const user = createUserInFirebaseAuth(email, password).then(() => {
    // Generate a user session or access token here
    next();
  })
  .catch(err => {
    res.status(500).json({ message: 'Unable to create user' });
  });
}

module.exports = { checkUniquePhoneNum, createUser };

