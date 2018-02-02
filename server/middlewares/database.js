import fs from 'fs'
import mongoose from 'mongoose'
import { resolve } from 'path'
import config from '../config'
const models = resolve(__dirname, '../database/schema')
fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(resolve(models, file)))

export const database = app => {
  if (config.env === 'development') {
    mongoose.set('debug', true)
  }

  mongoose.connect(config.db)

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.db)
  })

  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB')
  })
}
