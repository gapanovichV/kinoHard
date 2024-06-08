import { InlineKeyboard } from "grammy"

import { getAllChannel } from "../lib/database/actions/channels.actions"
import type { ChannelsParams } from "../lib/database/models/channels.models"
import type { Status } from "../lib/database/types"

interface keyboardResponse {
  status: Status
  data?: ChannelsParams[]
}

export const keyboard = async () => {
  const response: keyboardResponse = await getAllChannel()
  const buttonLinkChannels = response.data.map((channel: ChannelsParams) =>
    InlineKeyboard.url(channel.nameChannel, `t.me/${channel.linkChannel}`)
  )
  const buttonCheckSubscribe = InlineKeyboard.text("Проверить", "check")
  return InlineKeyboard.from([buttonLinkChannels, [buttonCheckSubscribe]])
}
