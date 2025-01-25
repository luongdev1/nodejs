import express from 'express'
import path from 'path'
import configViewEngine from './config/viewEngine.js'
import dotenv from 'dotenv'
import connection from './config/database.js'
import routes from './routes/routes.js'

const app = express()

// env
dotenv.config()

// require('dotenv').config();
const port = process.env.PORT || 3001

// config view engine
configViewEngine(app)

// routes
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})