import Property from "../models/property";

export const createProperty = async (property) => {
  return await Property.create(property);
};
