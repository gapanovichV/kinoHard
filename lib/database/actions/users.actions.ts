import dbConnect from "../dbConnect";
import {Users, UsersParams} from "../models/users.models";
import {handleError} from "../../utils";
import {Status, StatusResponse, UserCreateParams} from "../types";


export const findUserByChatId = async (chatId: number)=> {
  return Users.findOne({ chatId })
}

export const createUser = async (user: UserCreateParams): Promise<StatusResponse> => {
  await dbConnect()

  const findUser = await findUserByChatId(user.id)

  if (findUser !== null)
    return {status: Status.Error, data: "This chatId already used by"}

  try {
    const newUser: UsersParams = await Users.create({
      chatId: user.id,
      username: user.username,
      isPremium: user.is_premium,
      language: user.language_code,
      lastName: user.last_name!,
      firstName: user.first_name!,
    })
    return {
      status: Status.Success,
      data: newUser
    }
  } catch (error) {
    handleError(error)
    return {
      status: Status.Error,
    }
  }
}