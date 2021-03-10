import express from 'express';
import routes from './routes';
import connectToDatabase from './configs/database';
import { clientErrorHandler, logErrors } from './errors/handler';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3003;

connectToDatabase();

app.use(express.urlencoded({ extended: true })); // make the request body readable
app.use(express.json());

app.use('/api/v1', routes);

app.use(logErrors);
app.use(clientErrorHandler);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Property service is running on ${PORT}`));
