import { handleError } from "../../utils"
import dbConnect from "../dbConnect"
import { Channels } from "../models/channels.models"

export const getAllChannel = async () => {
  try {
    await dbConnect()
    const channels = await Channels.find()
    return {
      status: "success",
      data: JSON.parse(JSON.stringify(channels))
    }
  } catch (error) {
    handleError(error)
  }
}
