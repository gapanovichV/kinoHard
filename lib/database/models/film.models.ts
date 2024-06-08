import type {Document} from "mongodb";
import { model, models, Schema } from "mongoose"

export interface FilmParams extends Document {
  _id: string;
  numFilm: number;
  img: string
  title: string
  year: number
  description: string
}

const filmSchema = new Schema<FilmParams>({
  numFilm: {type: Number, required: true, unique: true},
  img: {type: String, required: true},
  title: {type: String, required: true},
  year: {type: Number, required: true},
  description: {type: String, required: true},
})

export const Film = models.Film || model("Film", filmSchema)
