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
  return (
    <div>
       <h2 className='text-center'>
        Manage Speakers
      </h2>

      {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add speakers
</button>

<table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Bio</th>
      <th scope="col">Image</th>
      <th scope="col">Designation</th>
      <th scope="col">Venue</th>
    </tr>
  </thead>
  <tbody>
    {allSpeaker.map((speak, index)=>(
      <tr key={index}>
      
      <td>{speak.name}</td>
      <td>{speak.bio}</td>
      <td><img src={`http://localhost:5000/uploads/${speak.image}`} width={50} height={50} alt={speak.name} /></td>
      <td>{speak.designation}</td>
      <td>{speak.venueId?.name}</td>
    </tr>
    ))}
  </tbody>
</table>

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
          <select 
  className="form-select" 
  value={venueId} 
  onChange={(e) => setvenueId(e.target.value)}
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
