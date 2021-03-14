import mongoose from 'mongoose';

const { Schema } = mongoose;

const airlineSchema = new Schema({
  _id: {
    type: String,
    maxLength: 20,
  },

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

  airlineLogo: {
    type: String,
    require: true,
  },
});

const Airline = mongoose.model('airline', airlineSchema);

export default Airline;
