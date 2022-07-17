import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import morganBody from "morgan-body";
import swaggerJsDoc from "swagger-jsdoc";

import swaggerui from "swagger-ui-express";

dotenv.config();
import "./config/database";
import helmet from "helmet";
import AppError from "./utils/appError";
import globalErrorHandler from "./controllers/errorController";
import propertiesRouter from "./routes/properties";

const app: Application = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Properties API",
      description: "Chimoney code challenge - An API to list properties",
      contact: {
        name: "Michael Eyitayo <michaeleyitayo.dev@gmail.com>",
      },
      servers: ["http://localhost:8000", "https://chimoney-test.herokuapp.com"],
    },
  },
  apis: ["./src/routes/*.ts", "./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());

app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  morganBody(app);
}

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ data: "CHIMONEY CHALLENGE Backend Application" });
});

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocs));
app.use("/api/properties", propertiesRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
