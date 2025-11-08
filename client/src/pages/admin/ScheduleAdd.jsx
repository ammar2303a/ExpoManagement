import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function ScheduleAdd() {
  const [allVenues, setVenue] = useState([]);
  const [allSpeaker, setSpeaker] = useState([]);
  const [allShedule, setShedule] = useState([]);
  const [speaker, setSpeak] = useState("");
  const [venueId, setvenueId] = useState("");
  const [dayTitle, setDayTitle] = useState("");
  const [date, setDate] = useState("");
  const [title, setStitle] = useState("");
  const [room, setRoom] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [description, setDescription] = useState("");
  const [sessions, setSessions] = useState([]);

  //  console.log("Yeh rocord",allShedule.getShedule);



  const addSession = () => {
    if (!sessions) return alert("Please select Sessions");
    const newSession = {
      title,
      room,
      timeStart,
      timeEnd,
      description,
      speaker,
      venueId,
    };
    setSessions([...sessions, newSession]);

    // Reset inputs after adding
    setStitle("");
    setRoom("");
    setTimeStart("");
    setTimeEnd("");
    setDescription("");
    setSpeak("");
    setvenueId("");
  };

  const SheduleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const sheduleData = {
        speaker,
        venueId,
        dayTitle,
        date,
        title,
        timeStart,
        timeEnd,
        description,
        sessions
      }
      await axios.post("http://localhost:5000/api/shedule/create", sheduleData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Shedule Inserted")
      setSpeak("");
      setvenueId("");
      setDayTitle("");
      setDate("");
      setStitle("");
      setRoom("");
      setTimeStart("");
      setTimeEnd("");
      setDescription("");

    } catch (error) {
      alert('Insertion Failed')
    }
  }

  const fetchVenue = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/venue/")
      setVenue(res.data);


    } catch (error) {
      alert('Error fetching record:', error)
    }
  }

  const fetchSpeaker = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/speaker/")
      setSpeaker(res.data);

    } catch (error) {
      alert('Error fetching record:', error)
    }
  }

  const fetchShedule = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/shedule/")
      setShedule(res.data.getShedule);
      console.log("API Full Data:", res.data);
    } catch (error) {
      alert('Error fetching record:', error)
    }
  }

  useEffect(() => {
    fetchSpeaker();
    fetchVenue();
    fetchShedule();
    // console.log(allSpeaker);
    // console.log(allVenues);


  }, [])
  return (
    <div>
      <h2 className='text-center'>
        Manage Shedule
      </h2>
      {/* 🔘 Button to open Main Modal */}
      <button
        type="button"
        className="btn btn-primary m-3"
        data-bs-toggle="modal"
        data-bs-target="#mainModal"
      >
        Add Shedule
      </button>

  <div className="container mt-4">
  <div className="card shadow-sm border-0 rounded-3">
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h5 className="mb-0 text-light">Schedule Details</h5>
      <span className="badge bg-light text-primary">
        Total Days: {allShedule?.length || 0}
      </span>
    </div>

    {/* Scrollable wrapper */}
    <div style={{ maxHeight: "400px", overflow: "auto" }}>
      <div style={{ minWidth: "900px" }}>
        <table className="table table-striped table-bordered table-sm align-middle mb-0" style={{ tableLayout: "fixed", width: "100%" }}>
          <colgroup>
            <col style={{ width: '12%' }} /> {/* Day Title */}
            <col style={{ width: '12%' }} /> {/* Date */}
            <col style={{ width: '20%' }} /> {/* Title */}
            <col style={{ width: '10%' }} /> {/* Time Start */}
            <col style={{ width: '10%' }} /> {/* Time End */}
            <col style={{ width: '15%' }} /> {/* Room */}
            <col style={{ width: '21%' }} /> {/* Speaker */}
          </colgroup>

          <thead className="table-light" style={{ position: "sticky", top: 0, zIndex: 10 }}>
            <tr>
              <th className="text-nowrap">Day Title</th>
              <th className="text-nowrap">Date</th>
              <th className="text-nowrap">Title</th>
              <th className="text-nowrap">Time Start</th>
              <th className="text-nowrap">Time End</th>
              <th className="text-nowrap">Room</th>
              <th className="text-nowrap">Speaker</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(allShedule) && allShedule.length > 0 ? (
              allShedule.map((schedule, i) =>
                schedule.sessions.map((session, j) => (
                  <tr key={`${i}-${j}`}>
                    <td className="text-nowrap"><strong>{schedule.dayTitle}</strong></td>
                    <td className="text-nowrap">{schedule.date}</td>
                    <td style={{ wordWrap: 'break-word' }}>{session.title}</td>
                    <td className="text-nowrap">{session.timeStart}</td>
                    <td className="text-nowrap">{session.timeEnd}</td>
                    <td className="text-nowrap">{session.room}</td>
                    <td className="text-nowrap">{session.speaker?.name || <span className="text-muted">N/A</span>}</td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">
                  No schedule data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


      {/* 🟢 MAIN MODAL */}
      <div
        className="modal fade"
        id="mainModal"
        tabIndex="-1"
        aria-labelledby="mainModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={SheduleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="mainModalLabel">
                  Add Shedule
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">

                <div className="input-group mb-3">
                  <span className="input-group-text w-25" id="basic-addon1">Day Title</span>
                  <input type="text" value={dayTitle} onChange={(e) => setDayTitle(e.target.value)} className="form-control" />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text w-25" id="basic-addon1">Date</span>
                  <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" />
                </div>

                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => {
                    const mainModalEl = document.getElementById("mainModal");
                    const mainModal = bootstrap.Modal.getInstance(mainModalEl);
                    if (mainModal) mainModal.hide();

                    const travelModalEl = document.getElementById("travelModal");
                    const travelModal = new bootstrap.Modal(travelModalEl);
                    setTimeout(() => travelModal.show(), 200);
                  }}
                >
                  Add Sessions
                </button>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Save Shedule
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 🔵 NESTED TRAVEL MODAL */}
      <div
        className="modal fade"
        id="travelModal"
        data-bs-backdrop="false"
        tabIndex="-1"
        aria-labelledby="travelModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="travelModalLabel">
                Add Sessions
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">

              <div className="input-group mb-3">
                <span className="input-group-text w-25" id="basic-addon1">Title</span>
                <input type="text" value={title} onChange={(e) => setStitle(e.target.value)} className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text w-25" id="basic-addon1">Room</span>
                <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text w-25" id="basic-addon1">Start Time</span>
                <input type="text" value={timeStart} onChange={(e) => setTimeStart(e.target.value)} className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text w-25" id="basic-addon1">End Time</span>
                <input type="text" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text w-25" id="basic-addon1">Description</span>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
              </div>
            </div>

            <div className="mb-2">
              <label className="form-label">Select Venue</label>
              <select className="form-select" value={venueId} onChange={(e) => setvenueId(e.target.value)}
              >
                <option value="">Select</option>  {/* ← Empty value agar select nahi hua */}
                {allVenues.map((allven, index) => (
                  <option key={index} value={allven._id}>
                    {allven.name}
                  </option>
                ))}
              </select>

            </div>

            <div className="mb-2">
              <label className="form-label">Select Speaker</label>
              <select className="form-select" value={speaker} onChange={(e) => setSpeak(e.target.value)}>
                <option value="">Select</option>  {/* ← Empty value agar select nahi hua */}
                {allSpeaker.map((speak, index) => (
                  <option key={index} value={speak._id} >
                    {speak.name}
                  </option>
                ))}

              </select>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  const travelModalEl = document.getElementById("travelModal");
                  const travelModal = bootstrap.Modal.getInstance(travelModalEl);
                  if (travelModal) travelModal.hide();

                  // 🧹 Backdrop clean
                  document
                    .querySelectorAll(".modal-backdrop")
                    .forEach((el) => el.remove());
                  document.body.classList.remove("modal-open");
                  document.body.style.paddingRight = "";

                  // 🔄 Show main modal again
                  setTimeout(() => {
                    const mainModalEl = document.getElementById("mainModal");
                    const mainModal = new bootstrap.Modal(mainModalEl);
                    mainModal.show();
                  }, 150);
                }}
              >
                Close
              </button>

              <button type="submit" className="btn btn-success" onClick={addSession}>
                Add Option
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleAdd
