// Import express
import { Router } from 'express';
import { createRatingReview, getAllRatingReviews } from '../controllers/rating-review-controller.js';

// Create a router
const router = Router();

// Add a route for creating a rating review
router.post('/ratingReview', createRatingReview);
router.get('/ratingReview/:id', getAllRatingReviews);

// Export the router
export default router;