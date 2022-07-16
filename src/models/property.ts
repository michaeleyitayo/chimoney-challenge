import { model, Schema, ObjectId } from "mongoose";
import { IPropertyDocument } from "../types/models/property";

const propertySchema = new Schema<IPropertyDocument>(
  {
    ownerName: String,
    propertyNickname: String,
    fullAddress: String,
    propertyType: String,
    bedrooms: Number,
    bathrooms: Number,
    garages: Number,
  },
  { timestamps: true }
);

const Property = model<IPropertyDocument>("property", propertySchema);

export default Property;
