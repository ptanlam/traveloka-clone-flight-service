import mongoose from 'mongoose';

const { Schema } = mongoose;

const airlineSchema = new Schema({
  airlineName: {
    type: String,
    maxLength: 250,
    required: true,
    unique: true,
  },

  airlineCountry: {
    type: String,
    maxLength: 250,
    required: true,
  },

  airlineLogoUrl: {
    type: String,
    required: true,
  },
});

const Airline = mongoose.model('airline', airlineSchema);

export default Airline;
