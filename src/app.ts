import { Telegraf } from "telegraf"
import { message } from "telegraf/filters"

import "dotenv/config"

import { getFilmByNumFilm } from "./lib/database/actions/film.actions"
import { createUser } from "./lib/database/actions/users.actions"
import type { FilmParams } from "./lib/database/models/film.models"
import { Status } from "./lib/database/types"

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply("Welcome")
  void createUser(ctx.update.message.from)
})

bot.on(message("text"), async (ctx) => {
  // TODO: Сделать проверку на тип
  const filmFind = await getFilmByNumFilm(+ctx.message.text)
  if (filmFind.status === Status.Error) {
    // TODO: Сделать ответ если нет фильма по номеру
    await ctx.reply("ERROR")
  }
  if (filmFind.status === Status.Success || filmFind.data) {
    // TODO: Красиво оформить ответ
    const film: FilmParams = filmFind.data
    await ctx.reply(film.title + film.year)
  }
})

bot.launch()

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))
