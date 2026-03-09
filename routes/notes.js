import express from 'express'
import Note from '../models/Note.js'

const router = express.Router()

//get all notes
router.get('/', async (req, res)=>{
    try {
    const notes = await Note.find() //find all docs from mongoose model
    res.json(notes)
    } 
    catch (err){
        res.status(500).json
    }
})

//POST a new note
router.post('/', async (req, res)=>{
    try {
    const note = await note.create(req.body)
    res.json(note)
}
catch(err){
    res.status(500).json({mesage: err.message})
}
})
//Put edit a note