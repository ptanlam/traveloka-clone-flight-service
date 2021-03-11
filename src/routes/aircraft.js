import express from 'express';
import AircraftController from '../controllers/aircraftController';

const router = express.Router();

router
  .route(':_id?')
  .get(AircraftController.getAircrafts)
  .post(AircraftController.postAircraft)
  .patch(AircraftController.patchAircraft)
  .delete(AircraftController.deleteAircraft);

export default router;
