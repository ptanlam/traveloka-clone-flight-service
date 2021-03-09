import express from 'express';
import airportController from '../controllers/airportController';
import airlineController from '../controllers/airlineController';

const router = express.Router();

router
  .route('/airports/:_id?')
  .get(airportController.getAirports)
  .post(airportController.postAirport)
  .patch(airportController.patchAirport)
  .delete(airportController.deleteAirport);

router
  .route('/airlines/:_id?')
  .get(airlineController.getAirlines)
  .post(airlineController.postAirline)
  .patch(airlineController.patchAirline)
  .delete(airlineController.deleteAirline);
export default router;
