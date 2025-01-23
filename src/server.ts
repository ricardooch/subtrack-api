import express from 'express' // ESM 
import 'dotenv/config'
import router from './router'

const app = express()

// Leer datos de formularios
app.use(express.json())

app.use('/api', router)

export default app