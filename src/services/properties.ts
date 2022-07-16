import Property from "../models/property";
import { IPropertyDocument } from "../types/models/property";

export const createProperty = async (property): Promise<IPropertyDocument> => {
  return await Property.create(property);
};

export const updateProperty = async (
  propertyId: string,
  data
): Promise<boolean> => {
  const result = await Property.updateOne(
    { _id: propertyId },
    { $set: { ...data } }
  );
  return result.acknowledged;
};

export const getProperties = async (
  limit: number,
  skip: number
): Promise<Array<IPropertyDocument>> => {
  return await Property.find({}).skip(skip).limit(limit);
};
