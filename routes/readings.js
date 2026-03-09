import express from 'express'
import Reading from '../models/Reading.js'

const router = express.Router()

//get all readings
router.get('/', async (req, res)=>{
    try {
        const readings= await Reading.find()
        res.json(readings)
    } catch (err){
        res.status(500).json({ message: err.message})
    }
})

//post a new reading 
router.post('/',async(req, res)=> {
try{
    const reading = await Reading.create(req.body)
    res.json(reading)
} catch (err){
    res.status(500).json({ message: err.message})
}
})

//delete a reading
router.delete('/:id', async (req, res)=>{
    try {
        await Reading.findByIdAndDelete(req.params.id)
        res.json({message: 'Reading deleted'})
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

export default router