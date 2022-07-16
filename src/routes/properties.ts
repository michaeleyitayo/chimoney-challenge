import { Router } from "express";
import * as propertiesController from "../controllers/properties";

const propertiesRouter = Router();

propertiesRouter
  .get("/", propertiesController.fetchProperties)
  .post("/", propertiesController.addProperty)
  .patch("/:propertyId", propertiesController.editProperty);

export default propertiesRouter;
