import mongoose from 'mongoose';

const { Schema, SchemaTypes } = mongoose;

const flightSchema = new Schema({
  flightId: { type: String, unique: true, required: true },
  brand: { type: String, required: true },
});

const Flight = mongoose.model('flight', flightSchema);

export default Flight;
