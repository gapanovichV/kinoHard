import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error("Mongodb URI environment variable inside .env")
}

let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    const opts = {
      dbName: "KinoHard",
      bufferCommands: false
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (err) {
    cached.promise = null
    throw err
  }
  return cached.conn
}

export default dbConnect