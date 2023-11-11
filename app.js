import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Import routes
import authRoutes from './src/authentication/routes/auth_route.js';
import rideBookingRoutes from './src/ride-booking/routes/ride-booking-route.js';

// Use middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(express.static('public'));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html', (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Use routes
app.use('/api', authRoutes);
app.use('/api', rideBookingRoutes);

// Set up Socket.IO to handle location updates
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('locationUpdate', (location) => {
    console.log('Location update received:', location);
    io.emit('locationUpdate', location);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});

export default app;