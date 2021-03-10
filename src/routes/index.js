import express from 'express';
import airportRoutes from './airport';
import airlineRoutes from './airline';

const router = express.Router();

router.use('/airports', airportRoutes);
router.use('/airlines', airlineRoutes);

export default router;
