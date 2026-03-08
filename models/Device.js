import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String
})

export default mongoose.model('Device', deviceSchema)