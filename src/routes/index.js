import express from 'express';
import flightController from '../controllers/flightController';

const router = express.Router();

router
.route('/airports/:_id?')
.get(flightController.getAirports)
.post(flightController.postAirport)
.patch(flightController.patchAirport)
.delete(flightController.deleteAirport);

export default router;
