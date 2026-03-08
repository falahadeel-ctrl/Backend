import mongoose from "mongoose";

// handles everything related to user notes:
// GET — fetches all notes from MongoDB
// POST — creates a new note
// PUT — edits an existing note by its id
// DELETE — deletes a note by its id

const noteSchema = new mongoose.Schema({
    title: String,
    text: String,
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.model('Note', noteSchema)

