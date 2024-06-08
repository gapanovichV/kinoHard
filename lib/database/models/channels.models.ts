import type {Document} from "mongodb";
import { model, models, Schema } from "mongoose"


export interface ChannelsParams extends Document {
  _id: string;
  nameChannel: string
  linkChannel: string
}

const channelsSchema = new Schema<ChannelsParams>({
  nameChannel: {type: String, required: true},
  linkChannel: {type: String, required: true, unique: true},
})


export const Channels = models.Channel || model("Channel", channelsSchema)