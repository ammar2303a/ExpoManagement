import mongoose from "mongoose";

const SpeakerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    image: { type: String },
    designation: { type: String },
    // yeh connection hoga venue ke sath
    venueId: { type: mongoose.Schema.Types.ObjectId, ref: "Venue", required: true },
},
{ timestamps: true }
);
export default mongoose.model("Speaker", SpeakerSchema);
