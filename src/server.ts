import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const instance = express();
instance.use(bodyParser.json());

const port = 3333;

const app = NestFactory.create(ApplicationModule, instance);

app.listen(port, () => console.log(`Application is listening on port ${port}`));