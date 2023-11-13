import request from 'supertest';
import app from '../../../app.js'; // Import your express app

describe('Rating Review Controller', () => {
    describe('Create Rating Review', () => {
        it('should create a new rating review', async () => {
            const newRatingReview = {
                rating: 5,
                review: 'Great ride!',
                userId: 1,
                driverId: 2,
            };

            request(app)
                .post('/ratingReview') // Replace with your actual endpoint
                .send(newRatingReview)
                .then(response => {
                        expect(response.status).toBe(201);
                        expect(response.body).toHaveProperty('id');
                        done();
                })
                .catch(err => done(err));
        });

        it('should not create a new rating review with invalid data', async () => {
            const invalidRatingReview = {
                rating: 'invalid', // Assuming rating should be a number
                review: 'Great ride!',
                userId: 1,
                driverId: 2,
            };

            request(app)
                .post('/ratingReview') // Replace with your actual endpoint
                .send(invalidRatingReview)
                .then(response => {
                        expect(response.status).toBe(500);
                        expect(response.body).toHaveProperty('error');
                        done();
                })
                .catch(err => done(err));
        });
    });
});