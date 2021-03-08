import mongoose from "mongoose";

const { Schema, SchemaTypes } = mongoose;

const airportSchema = new Schema(
  {
    airportName: {
      type: String,
      maxLength: 250,
      unique: true,
      required: true,
    },
    airportLocation: { type: String, maxLength: 250 },
    //string lat long
    airportLattitude: {
      type: String,
      maxLength: 250,
      unique: true,
      required: true,
    },
    airportLongtitude: {
      type: String,
      maxLength: 250,
      required: true,
    },
    airportElevation: Number,
    otherDetails: Object,
  },
  {
    timestamps: true,
  }
);

const Airport = mongoose.model("airports", airportSchema);

export default Airport;
