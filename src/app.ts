import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandle';
import carsRouter from './Routes/Cars';
import motorcycleRouter from './Routes/Motorcycle';

const app = express();

app.use(express.json());
app.use(carsRouter);
app.use(motorcycleRouter);
app.use(ErrorHandler.handle);

export default app;
