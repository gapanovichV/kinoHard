import { handleError } from "../../utils"
import dbConnect from "../dbConnect"
import { Channels } from "../models/channels.models"
import { Status, type StatusResponse } from "../types"

export const getAllChannel = async () => {
  await dbConnect()
  try {
    const channels = await Channels.find()
    return {
      status: Status.Success,
      data: channels
    }
  } catch (error) {
    handleError(error)
    return {
      status: Status.Error
    }
  }
}

export const createChannel = async (): Promise<StatusResponse> => {
  await dbConnect()
  try {
    const newChannel = await Channels.create({
      nameChannel: "Сексология — всё о сексе",
      linkChannel: "@sexoscope"
    })
    return {
      status: Status.Success,
      data: newChannel
    }
  } catch (error) {
    handleError(error)
    return {
      status: Status.Error
    }
  }
}
