import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function EventTicket() {
  const [allbooking, setAllBooking] = useState([])

  const fetchBooking = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/book/")
      setAllBooking(res.data.getBooking)
    } catch (error) {
      alert('Error fetching record Booking:', error)
    }
  }
  useEffect(() => {
    fetchBooking();
    

  }, [])
  useEffect(() => {
    if (allbooking) {
      console.log("Now Booking id here:", allbooking);
      
    }
  }, [allbooking])

  return (
    <section
      className="min-vh-100 d-flex flex-column align-items-center justify-content-start"
      style={{
        backgroundColor: "#000",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        paddingTop: "50px",
        gap: "20px", // Space between tickets
      }}
    >
      {allbooking.map((book) => (
        <div key={book._id}
          className="ticket-container"
          style={{
            backgroundColor: "#111",
            width: "700px",
            // height: "px",
            borderRadius: "12px",
            display: "flex",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          {/* Left Part */}
          <div
            style={{
              flex: 2,
              padding: "20px 20px",
              fontSize: "0.8rem",
              lineHeight: "1.1rem",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", marginBottom: "4px", color: "#00ffb7" }}>
              {book.eventId?.title}
            </h2>
            <p style={{ color: "#ccc", marginBottom: "8px" }}>
              {book.eventId?.description}
            </p>

            <p style={{ color: "#00ffb7" }}>
              Purchase Name: <strong>{book.userId?.name}</strong>
            </p>
            {book.eventId?.sessions?.map((session, index) => (
              <div key={index} style={{ marginTop: "4px" }}>
                <p><strong style={{ color: "#00ffb7" }}>Venue: </strong>{session.venue?.name}</p>

                <p><strong style={{ color: "#00ffb7" }}>Speaker: </strong>{session.speakers?.name}</p>



                <p><strong style={{ color: "#00ffb7" }}>Room: </strong>{session.schedule?.sessions?.[0]?.room}</p>
                <p><strong style={{ color: "#00ffb7" }}>Time: </strong>{session.schedule?.sessions?.[0]?.timeStart} - {session.schedule?.sessions?.[0]?.timeEnd}</p>

              </div>



            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "#aaa",
                marginTop: "10px",
              }}
            >
              {/* <p>Row: B</p>
            <p>Seat: 14</p> */}
            </div>
          </div>

          {/* Right Part */}
          <div
            style={{
              flex: 1.2,
              background:
                "linear-gradient(180deg, rgba(0,255,183,0.15), rgba(0,255,255,0.35))",
              borderLeft: "1px dashed #444",
              padding: "20px 10px",
              textAlign: "center",
              fontSize: "0.8rem",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                borderBottom: "1px dashed #666",
                paddingBottom: "5px",
              }}
            >
              <h6 style={{ letterSpacing: "1px", fontSize: "0.75rem", color: "#76a094ff", marginTop: "8px" }}>
                TICKET NAME
              </h6>
              <h4 style={{ margin: "2px 0", fontSize: "1rem", color: "#bbf1e2ff" }}>{book.ticketId?.name}</h4>
            </div>

            <h5 style={{ color: "#00ffb7", fontSize: "1rem", marginTop: "50px" }}>PKR {book.totalPrice}</h5>

            <p style={{ color: "#bbb" }}> </p>

            <p style={{ color: "#bbb" }}>{book.quantity} Person</p>


            <p style={{ color: "#bbb" }}></p>

            <p style={{ marginTop: "5px" }}>Entry Time: 09:45 AM</p>
          </div>
        </div>
      ))}



    </section>
  );
}

export default EventTicket;
