import mongoose from 'mongoose'

let connectionPromise = null

export function isDbConnected() {
  return mongoose.connection.readyState === 1
}

export async function connectDB(uri) {
  if (connectionPromise) return connectionPromise
  connectionPromise = mongoose
    .connect(uri, { serverSelectionTimeoutMS: 4000 })
    .then(() => {
      console.log('📦 MongoDB conectado')
      return mongoose.connection
    })
    .catch((err) => {
      connectionPromise = null
      console.warn(`⚠️  Sin MongoDB (${err.message}). Usando pseudo-DB.`)
      return null
    })
  return connectionPromise
}
