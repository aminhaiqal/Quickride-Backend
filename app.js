import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Import routes
import authRoutes from './src/authentication/routes/auth_route.js';
import rideBookingRoutes from './src/ride-booking/routes/ride-booking-route.js';

// Use middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());

// Use routes
app.use('/api', authRoutes);
app.use('/api', rideBookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});