import type {Document} from "mongodb";
import { model, models, Schema } from "mongoose"


export interface channelParams extends Document {
  _id: string;
  nameChannel: string
  linkChannel: string
}

const channelSchema = new Schema<channelParams>({
  nameChannel: {type: String, required: true},
  linkChannel: {type: String, required: true, unique: true},
})


export const Channel = models.Channel || model("Channel", channelSchema)