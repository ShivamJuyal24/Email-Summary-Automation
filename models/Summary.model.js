import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
    email:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Email",
        required: true
    },
    summaryText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Summary", summarySchema)