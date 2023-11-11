import request from 'supertest';
import app from '../../../app.js'; // Import your express app

describe('Ride Booking Controller', () => {
  describe('Create Ride Booking', () => {
    it('should create a new ride booking', async () => {
      const newRideBooking = {
        // Mock your request body here
        // For example:
        passengerId: 1,
        driverId: 2,
        pickupLocation: 'Location A',
        dropoffLocation: 'Location B',
        paymentInfo: 'Cash',
        RidePreferences: 'Private',
        // Add more fields as necessary
      };

      request(app)
        .post('/rideBooking') // Replace with your actual endpoint
        .send(newRideBooking)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
            done();
        })
        .catch(err => done(err));
    });

    it('should not create a new ride booking with invalid data', async () => {
      const invalidRideBooking = {
        // Mock your request body with invalid data here
        // For example:
        passengerId: 'invalid', // Assuming passengerId should be a number
        driverId: 2,
        pickupLocation: 'Location A',
        dropoffLocation: 'Location B',
        // Add more fields as necessary
      };

      request(app)
        .post('/rideBooking') // Replace with your actual endpoint
        .send(invalidRideBooking)
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
            done();
        })
        .catch(err => done(err));

    });
  });
});