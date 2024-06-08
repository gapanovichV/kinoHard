import dbConnect from "../dbConnect";
import {Film} from "../models/film.models";
import {Status} from "../types";
import {handleError} from "../../utils";


export const createFilm = async () => {
  try {
    await dbConnect()
    const newFilm = await Film.create({
      numFilm: 100,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/2b07b826-ac55-49ac-89dd-f4b0b4f98eb1/1920x",
      title: "Бегущий по лезвию 2049",
      year: "2017",
      description: "В недалеком будущем мир населен людьми и репликантами, созданными выполнять самую тяжелую работу. Работа офицера полиции Кей — держать репликантов под контролем в условиях нарастающего напряжения. Он случайно становится обладателем секретной информации, которая ставит под угрозу существование всего человечества. Желая найти ключ к разгадке, Кей решает разыскать Рика Декарда — бывшего офицера специального подразделения полиции Лос-Анджелеса, который бесследно исчез много лет назад."
    })
    return JSON.parse(JSON.stringify(newFilm))
  } catch (error) {
    console.log(error)
  }
}


export const getFilmByNumFilm = async (numFilm: number) => {
  await dbConnect()
  const findFilm = await Film.findOne({numFilm})

  console.log("@findFilm",findFilm)

  if (findFilm === null ) {
    return {
      status: Status.Error,
    }
  }
    return {
      status: Status.Success,
      data: findFilm,
    }
}