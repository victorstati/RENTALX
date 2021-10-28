import express from 'express';
import swaggerui from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerFile))

app.use(router);

app.listen(3333, () => console.log("Server is running!"));