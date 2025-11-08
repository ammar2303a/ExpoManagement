import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'




function EventAdd() {
  const [allEvent, setAllEvent] = useState([]);
  const [allShedule, setAllShedule] = useState([]);
  const [allSpeaker, setAllSpeaker] = useState([]);
  const [allVenues, setAllVenue] = useState([]);
  // console.log(allEvent);
  

  



  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cardImage, setCardImage] = useState(null);
  const [venue, setVenue] = useState('');
  const [speakers, setSpeaker] = useState('');
  const [schedule, setShedule] = useState('');
  const [sessions, setSessions] = useState([]);

  const addSession = () => {
  if (!venue || !speakers || !schedule) {
    return alert("Please select Venue, Speaker and Schedule before adding session");
  }

  const newSession = {
    title,
    description,
    endDate,
    cardImage,
    venue,
    speakers,
    schedule,
  };

  setSessions([...sessions, newSession]);

  // Reset only the dropdowns for the next session
  // setVenue("");
  // setSpeaker("");
  // setShedule("");
};


  const eventSubmit = async (e) => {
    e.preventDefault();
    if (!venue || !speakers || !schedule) {
      alert("Please select Venue, Speaker and Schedule");
      return;
    }
    try {
      const token = localStorage.getItem("token");

      const formdata = new FormData();
      formdata.append("title", title)
      formdata.append("description", description)
      formdata.append("endDate", endDate)
      formdata.append("cardImage", cardImage)
      formdata.append("venue", venue)
       formdata.append("speakers", speakers);
      formdata.append("schedule", schedule);
     formdata.append("sessions", JSON.stringify(sessions));

      

      // formdata.append("speakers", JSON.stringify([speakers]));
      // formdata.append("schedule", JSON.stringify([schedule]));

      await axios.post("http://localhost:5000/api/event/create", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }

      })
      alert("Event Inserted")
      setTitle("");
      setDescription("");
      setEndDate("");
      setCardImage(null);
      setVenue("");
      setSpeakers("");
      setSchedule("")
    } catch (error) {
      console.error(error);
    res.status(400).json({ message: "Insertion Failed", error });
    }

  }
  const fetchShedule = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/shedule/")
      setAllShedule(res.data.getShedule)
    } catch (error) {
      alert('Error fetching record Shedule:', error)
    }
  }

  const fetchSpeaker = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/speaker/")
      setAllSpeaker(res.data)
    } catch (error) {
      alert('Error fetching record Speaker:', error)
    }
  }

  const fetchVenue = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/venue/")
      setAllVenue(res.data);

    } catch (error) {
      alert('Error fetching record Venue:', error)
    }
  }

   const fetchEvent = async ()=>{
    try {
      const res = await axios.get("http://localhost:5000/api/event/")
      setAllEvent(res.data.getEvent)
      
    } catch (error) {
      alert('Error fetching record Event:', error)
    }
  }

  useEffect(() => {
    fetchVenue();
    fetchShedule();
    fetchSpeaker();
    fetchEvent();
  }, [])

 
  return (
    <div>
      <h2 className='text-center'>
        Manage Events
      </h2>

      {/* 🔘 Button to open Main Modal */}
      <button
        type="button"
        className="btn btn-primary m-3"
        data-bs-toggle="modal"
        data-bs-target="#mainModal"
      >
        Add Events
      </button>
      {/* Table/////////// */}
      <div className="container-fluid mt-4">
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text-light">Table Title</h5>
            <span className="badge bg-light text-primary">Total Events: {allEvent.length || 0}</span>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-sm align-middle mb-0">
                <colgroup>
                  <col style={{ minWidth: '150px' }} /> {/* Column 1 */}
                  <col style={{ minWidth: '200px' }} /> {/* Column 2 */}
                  <col style={{ minWidth: '150px' }} /> {/* Column 3 */}
                  <col style={{ minWidth: '150px' }} /> {/* Column 4 */}
                </colgroup>

                <thead className="table-light">
                  <tr>
                    <th scope="col" className="text-nowrap">Title</th>
                    <th scope="col" className="text-nowrap">Description</th>
                    <th scope="col" className="text-nowrap">Start Date</th>
                    <th scope="col" className="text-nowrap">End Date</th>
                    <th scope="col" className="text-nowrap">Card Image</th>
                    <th scope="col" className="text-nowrap">Venue</th>
                    <th scope="col" className="text-nowrap">Speaker</th>
                    <th scope="col" className="text-nowrap">Shedule</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Example Row — Future Mapping Yahan Aayegi */}
                 {allEvent.map((eve, i)=>
                 eve.sessions.map((ses, j)=>(
                  <tr key={`${i}-${j}`}>
                    <td className="fw-semibold text-nowrap">{eve.title}</td>
                    <td className="text-nowrap">{eve.description}</td>
                    <td className="text-nowrap">{eve.startDate}</td>
                    <td className="text-nowrap">{eve.endDate}</td>
                      <td className="fw-semibold text-nowrap">{eve.cardImage}</td>
                    <td className="text-nowrap">{ses.venue?.name}</td>
                    <td className="text-nowrap">{ses.speakers?.name}</td>
                    <td className="text-nowrap">{ses.schedule?.dayTitle}</td>
                  </tr>
                 ))
              
                 )}

                  {/* No Data Message */}
                  <tr>
                    <td colSpan="4" className="text-center text-muted py-4">
                      No data available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

     <div className="modal fade" id="mainModal" tabIndex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <form onSubmit={eventSubmit}>
        <div className="modal-header">
          <h5 className="modal-title" id="mainModalLabel">Add Schedule & Sessions</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body">
          {/* Title */}
          <div className="input-group mb-3">
            <span className="input-group-text w-25">Title</span>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          {/* Description */}
          <div className="input-group mb-3">
            <span className="input-group-text w-25">Description</span>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          {/* End Date */}
          <div className="input-group mb-3">
            <span className="input-group-text w-25">End Date</span>
            <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>

          {/* Card Image */}
          <div className="input-group mb-3">
            <span className="input-group-text w-25">Card Image</span>
            <input type="file" accept="image/*" className="form-control" onChange={(e) => setCardImage(e.target.files[0])} />
          </div>

          {/* Venue */}
          <div className="mb-2">
            <label className="form-label">Select Venue</label>
            <select className="form-select" value={venue} onChange={(e) => setVenue(e.target.value)}>
              <option value="">Select</option>
              {allVenues.map((v, i) => <option key={i} value={v._id}>{v.name}</option>)}
            </select>
          </div>

          {/* Speaker */}
          <div className="mb-2">
            <label className="form-label">Select Speaker</label>
            <select className="form-select" value={speakers} onChange={(e) => setSpeaker(e.target.value)}>
              <option value="">Select</option>
              {allSpeaker.map((s, i) => <option key={i} value={s._id}>{s.name}</option>)}
            </select>
          </div>

          {/* Schedule */}
          <div className="mb-2">
            <label className="form-label">Select Schedule</label>
            <select className="form-select" value={schedule} onChange={(e) => setShedule(e.target.value)}>
              <option value="">Select</option>
              {allShedule.map((s, i) => <option key={i} value={s._id}>{s.dayTitle}</option>)}
            </select>
          </div>

          {/* Add Session */}
          <button type="button" className="btn btn-outline-primary mb-3" onClick={addSession}>
            Add Session
          </button>

          {/* Show Added Sessions */}
          {sessions.length > 0 && (
            <ul className="list-group">
              {sessions.map((s, i) => (
                <li key={i} className="list-group-item">
                  {s.title} | {s.venue} | {s.speakers} | {s.schedule}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-success">Save Schedule</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default EventAdd
