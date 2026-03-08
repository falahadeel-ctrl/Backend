import mongoose from "mongoose";

//contains get(fetches all readings from MongoDB and sends them to frontend),
// post(saves a new reading to MongoDB (this is what setInterval will use)),
// delete(deletes a specific reading by its id)

const readingSchema = new mongoose.Schema({
    voltage: Number,
    current: Number,
    power: Number,
    createdAT: {type: Date, default: Date.now}
})

export default mongoose.model('Reading', readingSchema)