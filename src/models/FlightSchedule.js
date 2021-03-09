import mongoose from 'mongoose';

const { Schema, SchemaTypes } = mongoose;

const flightScheduleSchema = new Schema(
  {
    flightId: {
      type: String,
      maxlength: 20,
      unique: true,
      required: true,
    },

    airlineCode: { type: String, require: true },
    aircraftCode: { type: String, require: true },

    firstAirportCode: { type: String, require: true },
    finalAirportCode: { type: String, require: true },
    transitAirportCode: { type: String },

    departureAt: { type: Date, required: true },
    arrivalAt: { type: Date, required: true },
    commercialRatio: { type: SchemaTypes.Decimal128, default: 1 },
  },
  {
    timestamps: true,
  }
);

const FlightSchedule = mongoose.model('flight_schedule', flightScheduleSchema);

export default FlightSchedule;
