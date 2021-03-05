import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Flight from './models/Flight';

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function connectToDatabase() {
  try {
    await mongoose.connect(
      'mongodb://localhost/traveloka_clone_flight_service',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
    // eslint-disable-next-line no-console
    console.log('Flight service connected to database successfully!');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Failed to connect to database: ${error.message}`);
  }
}

connectToDatabase();

app
  .route('/')
  .get((req, res) => {
    res.json({ hotels: [{ hotelName: 'asdasd' }, { hotelName: 'axascx' }] });
  })
  .post(async (req, res) => {
    try {
      const flight = new Flight({ ...req.body });
      await flight.save();
      res
        .status(201)
        .send(`Đã đăng ký chuyến bay ${flight.flightId} thành công`);
    } catch (error) {
      res.status(500).send(`Có lỗi xảy ra: ${error.message}`);
    }
  });

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Flight service is running on ${PORT}`));
