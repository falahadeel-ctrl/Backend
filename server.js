import cors from 'cors'    //frontend to talk with backend
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
dotenv.config()    //activiate .env file

const app = express()
app.use(cors())  //turns on cors
app.use(express.json())

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)   //connects to mongoDB
        console.log('MongoDB connected')
    } catch (err) {
        console.log('Error:',err.message)
    }
}

connectDB()

app.listen(3000, () => console.log('Server running on port 3000'))

mongoose.connect(process.env.MONGO_URL)