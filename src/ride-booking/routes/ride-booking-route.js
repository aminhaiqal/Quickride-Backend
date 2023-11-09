import express from 'express';
import RideBookingController from '../controllers/ride-booking-controller.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/book_ride', [
  body('name').isLength({ min: 1 }).withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('phone_number').isMobilePhone().withMessage('Invalid phone number'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('pickup_location').isLength({ min: 1 }).withMessage('Pickup location is required'),
  body('destination_location').isLength({ min: 1 }).withMessage('Destination location is required'),
  body('date_time').isISO8601().withMessage('Invalid date and time'),
  body('payment_info').isLength({ min: 1 }).withMessage('Payment information is required'),
  body('ride_preferences').isLength({ min: 1 }).withMessage('Ride preferences are required'),
], RideBookingController.create);

export default router;