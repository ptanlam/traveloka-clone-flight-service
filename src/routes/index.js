import express from 'express';
import airportRoutes from './airport';
import airlineRoutes from './airline';
import flightRoutes from './flight';

const router = express.Router();

router.use('/airports', airportRoutes);
router.use('/airlines', airlineRoutes);
router.use('/flights', flightRoutes);

export default router;
