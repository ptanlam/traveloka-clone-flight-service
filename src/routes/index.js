import express from 'express';
import airportController from '../controllers/airportController';
<<<<<<< HEAD
import flightScheduleController from '../controllers/flightController';
=======
import airlineController from '../controllers/airlineController';
>>>>>>> 13e35366b36bb5b27fc5a2665a5e380a4a8d31c6

const router = express.Router();

router
  .route('/airports/:_id?')
  .get(airportController.getAirports)
  .post(airportController.postAirport)
  .patch(airportController.patchAirport)
  .delete(airportController.deleteAirport);

router
<<<<<<< HEAD
  .route('/flightschedules/:_id?')
  .get(flightScheduleController.getFlightSchedules)
  .post(flightScheduleController.postFlightSchedule)
  .patch(flightScheduleController.patchFlightSchedule)
  .delete(flightScheduleController.deleteFlightSchedule);

=======
  .route('/airlines/:_id?')
  .get(airlineController.getAirlines)
  .post(airlineController.postAirline)
  .patch(airlineController.patchAirline)
  .delete(airlineController.deleteAirline);
>>>>>>> 13e35366b36bb5b27fc5a2665a5e380a4a8d31c6
export default router;
