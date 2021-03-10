import express from 'express';
import flightController from '../controllers/flightController';
import upload from '../configs/multer';

const router = express.Router();

router
  .route('/')
  .post(upload.single('flightSchedule'), flightController.postFlightSchedule);

export default router;
