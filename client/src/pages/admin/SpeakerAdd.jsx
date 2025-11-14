import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"

function SpeakerAdd() {
  const [allVenues, setVenue] = useState([]);
  const [allSpeaker, setSpeaker] = useState([])
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState(null);
    const [designation, setDesignation] = useState("");
    const [venueId, setvenueId] = useState("");

    const handlefilchange = (e) =>{
      setImage(e.target.files[0])
    }
    
    const speakersubmit = async (e) =>{
      e.preventDefault();
      try {
      const token = localStorage.getItem("token")

      const speakerData = {
        name,
        bio,
        image,
        designation,
        venueId
      }
      // await axios.post("http://localhost:5000/api/speaker/create", speakerData,{
      //   headers: {Authorization: `Bearer ${token}`}
      // });
      const formdata = new FormData();
      formdata.append("name", name)
      formdata.append("bio", bio)
      formdata.append("image", image)
      formdata.append("designation", designation)
      formdata.append("venueId", venueId)

       await axios.post("http://localhost:5000/api/speaker/create", formdata,{
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`}
      });

      
      alert("Spaeker Inserted")
      setName("");
      setBio("");
      setImage(null);
      setDesignation("");
      setvenueId("");
      fetchSpeaker();
      
      } catch (error) {
        alert('Insertion Failed')
      }

    }
     const fetchVenue = async ()=>{
        try {
            const res = await axios.get("http://localhost:5000/api/venue/")
        setVenue(res.data);
        
        
        } catch (error) {
            alert('Error fetching record:', error)
        }
    }

      const fetchSpeaker = async ()=>{
        try {
            const res = await axios.get("http://localhost:5000/api/speaker/")
        setSpeaker(res.data);
        
        } catch (error) {
            alert('Error fetching record:', error)
        }
    }

    useEffect(() =>{
        fetchSpeaker();
        fetchVenue();
        console.log(allSpeaker);
        console.log(allVenues);
        
        
    },[])

     const deleteEvent = async (id) => {
          if (!window.confirm("Are you sure you want to delete this shedule?")) return;
      
          try {
            await axios.delete(`http://localhost:5000/api/speaker/${id}`);
            alert("Speaker Deleted Successfully");
      
            fetchSpeaker(); // refresh table
          }
          catch (error) {
            alert("Delete Failed");
          }
        };
  return (
    <div>
       <h2 className='text-center'>
        Manage Speakers
      </h2>

      {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add speakers
</button>

<div className="container-fluid mt-4">
  <div className="card shadow-sm border-0 rounded-3">
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h5 className="mb-0 text-light">Speakers List</h5>
      <span className="badge bg-light text-primary">
        Total Speakers: {allSpeaker?.length || 0}
      </span>
    </div>

    <div
      className="card-body p-0"
      style={{ maxHeight: '400px', overflowY: 'auto' }} // Vertical scroll
    >
      <div
        className="table-responsive"
        style={{ overflowX: 'auto', minWidth: '600px' }} // Horizontal scroll
      >
        <table className="table table-striped table-sm align-middle mb-0">
          <colgroup>
            <col style={{ minWidth: '150px' }} /> {/* Name */}
            <col style={{ minWidth: '250px' }} /> {/* Bio */}
            <col style={{ minWidth: '100px' }} /> {/* Image */}
            <col style={{ minWidth: '160px' }} /> {/* Designation */}
            <col style={{ minWidth: '160px' }} /> {/* Venue */}
          </colgroup>

          <thead className="table-light">
            <tr>
              <th scope="col" className="text-nowrap">Name</th>
              <th scope="col" className="text-nowrap">Bio</th>
              <th scope="col" className="text-nowrap">Image</th>
              <th scope="col" className="text-nowrap">Designation</th>
              <th scope="col" className="text-nowrap">Venue</th>
              <th scope="col" className="text-nowrap">Delete</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(allSpeaker) && allSpeaker.length > 0 ? (
              allSpeaker.map((speak, index) => (
                <tr key={index}>
                  <td className="text-nowrap fw-semibold">{speak.name}</td>
                  <td style={{ whiteSpace: 'normal', maxWidth: '250px' }}>
                    {speak.bio}
                  </td>
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/${speak.image}`}
                      width={50}
                      height={50}
                      alt={speak.name}
                      className="rounded-circle shadow-sm"
                      style={{ objectFit: 'cover' }}
                    />
                  </td>
                  <td className="text-nowrap">{speak.designation}</td>
                  <td className="text-nowrap">
                    {speak.venueId?.name || <span className="text-muted">N/A</span>}
                  </td>
                  <td className="text-nowrap text-danger" style={{ cursor: "pointer" }}onClick={() => deleteEvent(speak._id)}>Delete</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No speaker data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>



{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <form onSubmit={speakersubmit}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Speaker</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Bio</label>
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} className="form-control" placeholder="Enter bio" />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="file" accept='image/*' onChange={handlefilchange} className="form-control" placeholder="Enter image URL" />
        </div>

        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} className="form-control" placeholder="Enter designation" />
        </div>

        {/* <div className="mb-3">
          <label className="form-label">Venue</label>
          <input type="text" value={venueId} onChange={(e) => setvenueId(e.target.value)} className="form-control" placeholder="Enter venue" />
        </div> */}

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
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
    </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default SpeakerAdd
