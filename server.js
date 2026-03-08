import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const connectDB = async() =>{}

mongoose.connect(process.env.MONGO_URL)