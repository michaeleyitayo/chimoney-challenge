import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import morganBody from "morgan-body";

dotenv.config();
import "./config/database";
import helmet from "helmet";

const app: Application = express();

app.use(express.json());

app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  morganBody(app);
}

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ data: "SHOP2AFRICA Backend Application" });
});

app.use("/api/route", () => {});

// PORT
//
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
