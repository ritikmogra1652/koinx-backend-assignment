import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import router from './Router';
import envConfig from './config/envConfig';
import connectToDb from './db/connection';

const app: Application = express();
const config = envConfig();

const port = config.port || 5000;

app.use(
  cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
    preflightContinue: false,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Cookie', 'x-api-key', 'x-agent-type'],
    exposedHeaders: ['x-api-key', 'Retry-After'],
  })
);

app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/api/v1', router);
connectToDb();

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});

export default app;
