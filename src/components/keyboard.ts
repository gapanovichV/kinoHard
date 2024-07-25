import { InlineKeyboard } from "grammy"

import { getAllChannel } from "../lib/database/actions/channels.actions"
import type { ChannelsParams } from "../lib/database/models/channels.models"
import type { Status } from "../lib/database/types"

interface keyboardResponse {
  status: Status
  data?: ChannelsParams[]
}

export const keyboard = async () => {
  const keyboard = new InlineKeyboard()
  const response: keyboardResponse = await getAllChannel()
  response.data.map((channel: ChannelsParams) =>
    keyboard.url(channel.nameChannel, `t.me/${channel.linkChannel}`).row()
  )
  keyboard.text("Проверить", "check")

  return keyboard
}
