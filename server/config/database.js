const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'myuser',
  password: process.env.DB_PASSWORD || 'mypass',
  database: process.env.DB_NAME || 'Stay-fit',
  logging: false,
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('PostgreSQL database connected successfully.')
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error)
    process.exit(1)
  }
}

module.exports = { sequelize, connectDB }
"use strict";



