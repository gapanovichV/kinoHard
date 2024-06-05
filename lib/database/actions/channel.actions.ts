import dbConnect from "../dbConnect";
import {handleError} from "../../utils";
import {Channel} from "../models/channel.models";

export const getAllChannel = async () => {
  try {
    await dbConnect()
    const channels = await Channel.find()
    return {
      status: "success",
      data: JSON.parse(JSON.stringify(channels))
    }
  } catch (error) {
    handleError(error)
  }
}