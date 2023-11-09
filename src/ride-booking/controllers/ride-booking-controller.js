import RideBooking from '../models/RideBooking';
import { validationResult } from 'express-validator';

const RideBookingController = {
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newRideBooking = new RideBooking(req.body);
      const savedRideBooking = await newRideBooking.save();

      res.json(savedRideBooking);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

export default RideBookingController;