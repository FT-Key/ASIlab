import 'dotenv/config'
import app from './app.js'
import { connectDB } from './config/db.js'

const PORT = process.env.PORT || 4001
const uri = process.env.MONGODB_URI

async function start() {
  if (uri) {
    await connectDB(uri)
  }
  app.listen(PORT, () => {
    console.log(`🚀 API escuchando en http://localhost:${PORT}`)
  })
}

start()
