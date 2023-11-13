import request from 'supertest';
import app from '../../../app.js'; // Import your express app
import { expect } from 'chai';

describe('User Profile Controller', function() {
    describe('Update User Profile', function() {
        it('should update a user profile with valid data', async function() {
            const newProfileData = {
                // Mock your request body here
                // For example:
                name: 'New Name',
                email: 'newemail@example.com',
                // Add more fields as necessary
            };

            const response = await request(app)
                .put('/userProfile/1') // Replace with your actual endpoint
                .send(newProfileData);

            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('success', true);
            expect(response.body).to.have.property('data').that.includes(newProfileData);
        });

        // Add more tests as necessary
    });

    describe('Delete User Profile', function() {
        it('should delete a user profile', async function() {
            const response = await request(app)
                .delete('/userProfile/1'); // Replace with your actual endpoint

            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('success', true);
            expect(response.body).to.have.property('message', 'User deleted successfully');
        });

        // Add more tests as necessary
    });
});