import express from 'express' // ESM 
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

const app = express()

// connection MongoDB function
connectDB()

// read forms data
app.use(express.json())
app.use('/api', router)

export default app