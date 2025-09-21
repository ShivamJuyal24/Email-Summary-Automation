import mongoose from "mongoose"

const digestSchema = new mongoose.Schema({
    timeBlock: {
        type: String,
        enum:["morning", "evening"],
        required: true
    },
    summaries:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Summary"
    }],
    sentAt:{
        type:Date,
        default: Date.now
    }
});

export default mongoose.model("Digest", digestSchema);