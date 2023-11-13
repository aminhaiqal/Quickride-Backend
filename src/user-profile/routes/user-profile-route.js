// FILEPATH: /C:/Users/User/Documents/Github/Quickride-Bankend/routes/user-profile-route.js

import { Router } from 'express';
const router = Router();
import { updateUserProfile, deleteUserProfile } from '../controllers/user-profile-controller.js';

// Add a route for updating a user profile
router.put('/userProfile/:id', updateUserProfile);

// Add a route for deleting a user profile
router.delete('/userProfile/:id', deleteUserProfile);

export default router;