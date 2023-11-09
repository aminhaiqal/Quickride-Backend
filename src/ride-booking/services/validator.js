import { body, validationResult } from 'express-validator';

app.post('/book_ride', [
  body('name').isLength({ min: 1 }).withMessage('Name is required'),
  body('phone_number').isMobilePhone().withMessage('Invalid phone number'),
  body('pickup_location').isLength({ min: 1 }).withMessage('Pickup location is required'),
  body('destination_location').isLength({ min: 1 }).withMessage('Destination location is required'),
  body('date_time').isISO8601().withMessage('Invalid date and time'),
  body('payment_info').isLength({ min: 1 }).withMessage('Payment information is required'),
  body('ride_preferences').isLength({ min: 1 }).withMessage('Ride preferences are required'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Continue with your logic here
});