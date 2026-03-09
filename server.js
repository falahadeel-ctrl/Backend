import cors from 'cors'    //frontend to talk with backend
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import readingsRouter from './routes/readings.js'
import notesRouter from './routes/notes.js'
import deviceRouter from './routes/device.js'
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

//generating random value
setInterval(async()=>{
    await Reading.create({
        voltage: (Math.random()*2+11).toFixed(2),
        current: (Math.random()* 2+2).toFixed(2),
        power:(Math.random()*50+30).toFixed(2),
    })
    console.log('reading saved')
},5000)

app.use('/api/readings', readingsRouter)
app.use('/api/notes', notesRouter)
app.use('/api/device', deviceRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))


// mongoose.connect(process.env.MONGO_URL)