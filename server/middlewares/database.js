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

    let wikiCharacters = require(resolve(__dirname, '../database/json/completeCharacters.json'))
    let wikiHouses = require(resolve(__dirname, '../database/json/completeHouses.json'))

    const WikiHouse = mongoose.model('WikiHouse')
    const WikiCharacter = mongoose.model('WikiCharacter')

    const existWikiHouses = await WikiHouse.find({}).exec()
    const existWikiCharacters = await WikiCharacter.find({}).exec()

    if (!existWikiHouses.length) WikiHouse.insertMany(wikiHouses)
    if (!existWikiCharacters.length) WikiCharacter.insertMany(wikiCharacters)
  })
}
