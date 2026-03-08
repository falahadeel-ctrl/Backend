import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err)
    }
}

connectDB()

app.listen(5000, () => console.log('Server running on port 5000'))

mongoose.connect(process.env.MONGO_URL)