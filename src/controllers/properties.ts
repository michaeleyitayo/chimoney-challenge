import { BAD_REQUEST, OK, RESOURCE_CREATED } from "../constants/response-codes";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import * as propertyValidator from "../validators/property";
import * as propertiesService from "../services/properties";

export const addProperty = catchAsync(async (req, res, next) => {
  const validateResult = propertyValidator.addProperty(req.body);
  if (validateResult.error) {
    return next(new AppError(validateResult.error.message, BAD_REQUEST));
  }

  const property = propertiesService.createProperty(req.body);

  if (!property) {
    return next(new AppError("Error adding new property", BAD_REQUEST));
  }
  res.status(RESOURCE_CREATED).json({
    status: "success",
    message: "Property added successfully",
    data: { property },
  });
});

export const editProperty = catchAsync(async (req, res, next) => {
  const validateResult = propertyValidator.editProperty(req.body);
  if (validateResult.error) {
    return next(new AppError(validateResult.error.message, BAD_REQUEST));
  }

  const result = propertiesService.updateProperty(
    req.params.propertyId,
    req.body
  );

  if (!result) {
    return next(new AppError("Error editing property", BAD_REQUEST));
  }
  res.status(OK).json({
    status: "success",
    message: "Property edited successfully",
  });
});
