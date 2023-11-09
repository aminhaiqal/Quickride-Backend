import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const RideBookingController = {
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newRideBooking = await prisma.rideBooking.create({
        data: req.body,
      });

      res.json(newRideBooking);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

export default RideBookingController;