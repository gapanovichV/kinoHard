import { Bot, GrammyError, HttpError } from "grammy"

import "dotenv/config"

import { getFilmByNumFilm } from "./lib/database/actions/film.actions"
import { createUser } from "./lib/database/actions/users.actions"
import type { FilmParams } from "./lib/database/models/film.models"
import { Status } from "./lib/database/types"

const bot = new Bot(process.env.BOT_TOKEN)

bot.command("start", async (ctx) => {
  await ctx.reply("Welcome")
  await createUser(ctx.update.message.from)
})

bot.on("msg", async (ctx) => {
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

bot.catch((err) => {
  const {ctx} = err;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});

bot.start()