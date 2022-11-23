import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandle';
import carsRouter from './Routes/Cars';

const app = express();

app.use(express.json());
app.use(carsRouter);
app.use(ErrorHandler.handle);

export default app;
