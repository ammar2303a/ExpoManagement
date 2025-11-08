import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import Tickets from './Tickets'
import { Link } from 'react-router-dom'

function Event() {
const [allEvent, setAllEvents] =useState([])



const fetchEvent = async ()=>{
  try {
   const res = await axios.get("http://localhost:5000/api/event/")
   setAllEvents(res.data.getEvent)
  } catch (error) {
    alert('Error fetching record:', error)
  }
}
useEffect(() =>{
     fetchEvent(); 
    },[])

     const handlescroll = (e, id) =>{
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({behavior: "smooth"})
      }
    }
  return (
    <div>
 <section id="events" className="py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">Upcoming Events</h2>
      <p className="text-muted">Join us at our exciting upcoming tech events.</p>
    </div>

    <div className="row g-4">
      {allEvent.map((even) => (
        <div className="col-md-6 col-lg-4" key={even._id}>
          <div className="card h-100 shadow-sm border-0">
            <img
              src={`http://localhost:5000/uploads/${even.cardImage}`}
              className="card-img-top"
              alt={even.title}
              style={{
    height: "180px",   // fix height
    objectFit: "cover" // image ko crop karke fit kare
  }}
            />
            <div className="card-body">
              <h5 className="card-title">{even.title}</h5>
              <p className="card-text">{even.description}</p>
              <ul className="list-unstyled small text-muted">
                <li><strong>Start : </strong>{even.startDate}</li>
                <li><strong>End : </strong>{even.endDate}</li>
              </ul>

              {/* Sessions in grey boxes */}
              <div className="sessions">
                {even.sessions.map((ses) => (
                  <div key={ses._id} className="session-box">
                    <p><strong>Venue :</strong> {ses.venue?.name || "TBA"}</p>
                    <p><strong>Speaker :</strong> {ses.speakers?.name || "TBA"}</p>
                    <p><strong>Date :</strong> {ses.schedule?.date || "TBA"}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-footer bg-transparent border-0 text-center">
<button className="btn btn-primary btn-sm w-100" onClick={() => {
  const section = document.getElementById("tickets-section");
  if(section){
    section.scrollIntoView({ behavior: "smooth" });
  }
}}>
  Book Event Ticket
</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style>{`
    #events {
      background-color: #f8f9fa;
    }
    #events .card-title {
      color: #212529;
    }
    #events .card-text {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    #events ul li {
      line-height: 1.4;
    }
    .sessions {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .session-box {
      background-color: #f1f3f5;
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 0.85rem;
      line-height: 1.3;
    }
    #events .btn-primary {
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
    #events .btn-primary:hover {
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }
  `}</style>
</section>


    </div>
  )
}

export default Event
