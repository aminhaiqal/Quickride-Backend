import express, { json } from 'express';
const app = express();
import authRoutes from './src/authentication/routes/auth_route.js';
import rideBookingRoutes from './src/ride-booking/routes/ride-booking-route.js';

app.use(json());

app.use('/api', authRoutes);
app.use('/api', rideBookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});
