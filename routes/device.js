import express from 'express'
import Device from '../models/Device.js'

const router = express.Router()

//Get device info
router.get('/', async (req, res)=>{
    try {
        const device = await Device.findOne()
        res.json(device)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

//put update device info
router.put('/', async (req, res)=>{
    try{
        const device = await Device.findOneAndUpdate({},req.body, {new: true, upsert: true}) //mongodb will update the first doc it finds,req.body doc will update specific fields,new retruns the updated doc not the old one,Upsert = Update + Insert
        res.json(device)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

export default router