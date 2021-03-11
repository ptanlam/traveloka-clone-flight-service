import mongoose from 'mongoose';

const { Schema, SchemaTypes } = mongoose;

const flightScheduleSchema = new Schema(
  {
    _id: {
      type: String,
      maxLength: 20,
    },

    AircraftCode: { type: String, required: true },
    aircraftCode: { type: String, required: true },

    firstAirportCode: { type: String, required: true },
    finalAirportCode: { type: String, required: true },
    transitAirportCode: { type: String },

    departureAt: { type: Date, required: true },
    arrivalAt: { type: Date, required: true },
    commercialRatio: { type: SchemaTypes.Decimal128, default: 0 },
  },
  {
    timestamps: true,
  }
);

const FlightSchedule = mongoose.model('flight', flightScheduleSchema);

export default FlightSchedule;
