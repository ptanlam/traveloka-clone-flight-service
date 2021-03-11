import express from 'express';
import airlineController from '../controllers/airlineController';

const router = express.Router();

router
  .route(':_id?')
  .get(airlineController.getAirlines)
  .post(airlineController.postAirline)
  .patch(airlineController.patchAirline)
  .delete(airlineController.deleteAirline);

export default router;
