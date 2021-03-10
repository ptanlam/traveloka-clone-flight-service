import mongoose from 'mongoose';

const { Schema } = mongoose;

const airlineSchema = new Schema({
  airlineName: {
    type: String,
    maxLength: 250,
    require: true,
    unique: true,
  },

  airlineCountry: {
    type: String,
    maxLength: 250,
    require: true,
  },

  airlineLogoUrl: {
    type: String,
    require: true,
  },
});

const Airline = mongoose.model('airline', airlineSchema);

export default Airline;
