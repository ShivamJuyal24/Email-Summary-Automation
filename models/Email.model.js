import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
    messageId: {
        type: String,
        unique: true,
        required: true // Added required for safety
    },
    from: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    body: {
        type: String
    },
    receivedAt: {
        type: Date,
        required: true
    },
    summarized: {
        type: Boolean,
        default: false
    },
    // Optional: Add priority if you want to highlight important emails
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    }
});

export default mongoose.model("Email", emailSchema);