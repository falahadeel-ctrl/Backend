import mongoose from "mongoose";

//handles the device settings:
//GET — fetches the device info (there's only ever ONE device so no id needed)
//PUT — updates the device info. The upsert:true means if no device exists yet, create one automatically

const deviceSchema = new mongoose.Schema({
    GridNumber: String,
    status: String,
    description: String
})

export default mongoose.model('Device', deviceSchema)
