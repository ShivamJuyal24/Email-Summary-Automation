import mongoose from "mongoose";

const digestSchema = new mongoose.Schema({
    timeBlock: {
        type: String,
        enum: ["morning", "evening"],
        required: true
    },
    summaries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Summary"
    }],
    // Track the period this digest covers
    periodCovered: {
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
            required: true
        }
    },
    totalEmailsProcessed: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["created", "sent", "failed"],
        default: "created"
    },
    sentAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Digest", digestSchema);