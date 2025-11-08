import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  cardImage: String,

  // Sessions as references only
  sessions: [
    {
      venue: { type: mongoose.Schema.Types.ObjectId, ref: "Venue", required: true },
      speakers: { type: mongoose.Schema.Types.ObjectId, ref: "Speaker" },
      schedule: { type: mongoose.Schema.Types.ObjectId, ref: "Schedule" }
    }
  ]
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
