import { ObjectId } from "mongodb";

export interface Authority {
  _id?: ObjectId;
  id?: string;
  name: string;
}