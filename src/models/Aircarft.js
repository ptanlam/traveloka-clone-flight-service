import mongoose from 'mongoose';

const { Schema, SchemaType } = mongoose;

const aircraftSchema = new Schema({
  // aircraftCode
  _id: {
    type: String,
    maxLength: 250,
  },

  aircraftName: {
    type: String,
    maxLength: 250,
    required: true,
  },

  aircraftHandLuggage: {
    type: Number,
    default: 7,
  },

  aircraftCapacity: {
    type: Number,
    required: true,
  },

  aircraftSeatClass: {
    type: [
      {
        seatClass: { type: String, unique: true, required: true },
        price: { type: SchemaType.Decimal128, default: 0, required: true },
        aircraftLuggage: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
});

const Aircraft = mongoose.model('aircraft', aircraftSchema);

export default Aircraft;
