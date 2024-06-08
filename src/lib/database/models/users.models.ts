import type { Document } from "mongoose"
import { model, models, Schema } from "mongoose"

export interface UsersParams extends Document {
  _id: string
  chatId: number
  username: string
  lastName: string
  firstName: string
  createdAt: Date
  isPremium: boolean
  language: string
}

const userScheme = new Schema<UsersParams>({
  chatId: { type: Number, required: true, unique: true },
  username: { type: String },
  lastName: { type: String },
  firstName: { type: String },
  createdAt: { type: Date, default: Date.now },
  isPremium: { type: Boolean },
  language: { type: String }
})

export const Users = models.Users || model("Users", userScheme)
