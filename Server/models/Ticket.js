import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },   // e.g. "Early Bird", "Regular", "Premium"
  price: { type: Number, required: true },  // e.g. 500, 1000, 1500
  quantity: { type: Number, default: 100 }, // total available tickets
  sold: { type: Number, default: 0 }        // how many tickets sold
}, { timestamps: true });

export default mongoose.model("Ticket", ticketSchema);
