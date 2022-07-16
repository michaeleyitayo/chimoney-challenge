import Joi from "joi";

export const addProperty = (body: any): Joi.ValidationResult => {
  const schema = Joi.object().keys({
    ownerName: Joi.string().required(),
    propertyNickname: Joi.string().required(),
    fullAddress: Joi.string().required(),
    propertyType: Joi.string().required(),
    bedrooms: Joi.number().required(),
    bathrooms: Joi.number().required(),
    garages: Joi.number().required(),
  });
  return schema.validate(body);
};

export const editProperty = (body: any): Joi.ValidationResult => {
  const schema = Joi.object().keys({
    ownerName: Joi.string(),
    propertyNickname: Joi.string(),
    fullAddress: Joi.string(),
    propertyType: Joi.string(),
    bedrooms: Joi.number(),
    bathrooms: Joi.number(),
    garages: Joi.number(),
  });
  return schema.validate(body);
};
