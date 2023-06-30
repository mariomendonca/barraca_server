import 'dotenv/config'
import express from 'express'
import { dbConnection } from './database/connection'
import { routes as fruitRoutes } from './routes/FruitsRoutes'
import { routes as storeRoutes } from './routes/StoreRoutes'
import { routes as usersRoutes } from './routes/UsersRoutes'

const app = express()

const PORT = process.env.PORT || 3333
app.use(express.json())
app.use(fruitRoutes)
app.use(storeRoutes)
app.use(usersRoutes)
dbConnection()

app.listen(PORT, () => console.log(`🔥 server running on ${PORT} 🔥`))
