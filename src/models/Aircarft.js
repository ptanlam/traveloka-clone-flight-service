code;
name;
luggage;
hand_luggage;
Capacity;
classofseat;
timestamps;

import mongoose, { SchemaTypes } from 'mongoose';

const { Schema, SchemaType } = mongoose;

const aircraftSchema = new Schema({
  aircraftName: {
    type: String,
    maxLength: 250,
    require: true,
    unique: true,
  },

  aircraftCode: {
    type: String,
    maxLength: 250,
    require: true,
    unique: true,
  },

  aircraftLuggage: {
    type: Number,
    require: true,
  },

  aircrafHandLuggage: {
    type: Number,
    required: true,
  },

  aircraftCapacity: {
    type: Number,
    required: true,
  },

  aircraftSeatClass: {
    type: [
      {
        seatClass: { type: String, unique: true },
        price: { type: SchemaType.Decimal128, require: true, default: 0 },
      },
    ],
    required: true,
  },
});

const Aircraft = mongoose.model('Aircraft', AircraftSchema);

export default Aircraft;
