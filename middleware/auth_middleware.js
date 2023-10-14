const roles = {
    admin: 'admin',
    driver: 'driver',
    passenger: 'passenger'
}

const setCustomClaimsBasedOnUserRoles = async (uid, customClaims) => {
    try {
      await firebase.auth().setCustomUserClaims(uid, customClaims);
      console.log(`Custom claims set for user ${uid}`);
    } catch (error) {
      console.error('Error setting custom claims:', error);
      throw error;
    }
  };

  const checkUserRole = (role) => {
    return async (req, res, next) => {
      const user = req.user; // Assuming you've set up authentication middleware
  
      if (user && user.customClaims && user.customClaims[role]) {
        // User has the required role, proceed to the route
        next();
      } else {
        // User doesn't have the required role, deny access
        res.status(403).send('Access Denied');
      }
    };
  };

  module.exports = { setCustomClaimsBasedOnUserRoles, checkUserRole };