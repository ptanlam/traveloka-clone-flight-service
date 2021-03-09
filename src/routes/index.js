import express from 'express';
import airportController from '../controllers/airportController';
import flightScheduleController from '../controllers/flightController';

const router = express.Router();

router
  .route('/airports/:_id?')
  .get(airportController.getAirports)
  .post(airportController.postAirport)
  .patch(airportController.patchAirport)
  .delete(airportController.deleteAirport);

router
  .route('/flightschedules/:_id?')
  .get(flightScheduleController.getFlightSchedules)
  .post(flightScheduleController.postFlightSchedule)
  .patch(flightScheduleController.patchFlightSchedule)
  .delete(flightScheduleController.deleteFlightSchedule);

export default router;
