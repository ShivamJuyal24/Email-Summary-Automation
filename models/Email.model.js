import mongoose from 'mongoose'

const emailSchema = new mongoose.Schema({
    messageId: {
        type: String,
        unique: true
    },
    from:{
        type: String,
        required: true
    },
    subject:{
        type:String
    },
    body:{
        type: String
    },
    receivedAt: {
        type: Date,
        required: true
    },
    summarized: {
        type:Boolean,
        default: false
    }
});

export default mongoose.model("Email", emailSchema);