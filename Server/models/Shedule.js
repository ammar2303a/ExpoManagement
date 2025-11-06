import mongoose from "mongoose"

const scheduleSchema = new mongoose.Schema({
  dayTitle: String,
  date: String,
  sessions: [
    {
      title: String,
      timeStart: String,
      timeEnd: String,
      description: String,
      room: String,
      speaker: { type: mongoose.Schema.Types.ObjectId, ref: "Speaker" },
      venue: { type: mongoose.Schema.Types.ObjectId, ref: "Venue" },
    }
  ],
});
export default mongoose.model("Schedule", scheduleSchema);