import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users", // jo user book kar raha hai
    required: true 
  },
//   userName: {
//     type: String,
//     required: true // name for quick reference in booking
//   },
  eventId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Event", // jis event ka ticket book ho raha
    required: true 
  },
  ticketId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Ticket", // ticket type (price wale)
    required: true 
  },
  //  venueId: { type: mongoose.Schema.Types.ObjectId, ref: "Venue", required: true },
  //     speakersId: { type: mongoose.Schema.Types.ObjectId, ref: "Speaker", required: true },
  //     scheduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Schedule", required: true },
  quantity: { 
    type: Number, 
    required: true, 
    default: 1 
  },
  totalPrice: { 
    type: Number, 
    required: true 
  },
  bookingDate: { 
    type: Date, 
    default: Date.now 
  },
});

export default mongoose.model("Booking", bookingSchema);