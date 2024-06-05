import {model, models, Schema} from "mongoose";

export interface usersParams extends Document {
  _id: string;
  username: string;
  name: string;
  createdAt: Date;
}

const userScheme = new Schema<usersParams>({
  username: {type: String},
  name: {type: String},
  createdAt: {type: Date, default: Date.now},
})

const Users = models.Users || model("Users", userScheme)