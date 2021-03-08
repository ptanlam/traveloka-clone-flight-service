import mongoose from 'mongoose';

export default async function connectToDatabase() {
  try {
    await mongoose.connect(
      'mongodb://localhost/traveloka_clone_flight_service',
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    // eslint-disable-next-line no-console
    console.log('Flight DB connected successfully!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(
      `Failed while connecting: ${err.message}`,
    );
  }
}
