import express from "express";
import airportController from "../controllers/airportController";

const router = express.Router();

router
  .route("/airports/:_id?")
  .get(airportController.getAirports)
  .post(airportController.postAirport)
  .patch(airportController.patchAirport)
  .delete(airportController.deleteAirport);

export default router;
