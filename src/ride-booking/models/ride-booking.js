import { Schema, model } from 'mongoose';

const RideBookingSchema = new Schema({
  name: { type: String, required: true },
  phone_number: { type: String, required: true },
  pickup_location: { type: String, required: true },
  destination_location: { type: String, required: true },
  date_time: { type: Date, required: true },
  payment_info: { type: String, required: true },
  ride_preferences: { type: String, required: true },
});

export default model('RideBooking', RideBookingSchema);