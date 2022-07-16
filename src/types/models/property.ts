import { Document } from "mongoose";

export interface IPropertyDocument extends Document {
  ownerName: string;
  propertyNickname: string;
  fullAddress: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
}
