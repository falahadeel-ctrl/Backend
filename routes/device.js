import express form 'express'
import Device from '../models/Device.js'

const router = express.Router()

//Get device info
router.get('/', asnyc (req, res)=>{
    try {
        const device = await Device.findOne()
        res.json(device)
    } catch(err){
        
    }
})