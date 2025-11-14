import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";




function VenueAdd() {
    const [allVenues, setVenue] = useState([]);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [mapLink, setMapLink] = useState("");
    const [capacity, setCapacity] = useState("");

    const [mode, setMode] = useState("");
    const [description, setDescription] = useState("");
    const [linkText, setLinkText] = useState("");
    const [linkUrl, setLinkUrl] = useState("");
    const [travelOptions, setTravelOptions] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);

      const addTravelOption = () => {
    if (!mode) return alert("Please select mode");
    const newOption = { mode, description, linkUrl, linkText };
    setTravelOptions([...travelOptions, newOption]);
    setDescription("");
    setLinkUrl("");
    setLinkText("");
    alert(`${mode} option added!`);
  };

    const eventSubmit = async (e) =>{
        e.preventDefault();
       try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

       
    // 🟢 Prepare full payload
    const venueData = {
      name,
      address,
      city,
      mapLink,
      capacity: Number(capacity),
      travelOptions, // send travel option array
       galleryImages,  // you can later make multiple
    };
    console.log("Sending Venue Data:", venueData);
    //   console.log({ name, address, city, mapLink, capacity });
         await axios.post("http://localhost:5000/api/venue/create",venueData,{
            headers: {Authorization: `Bearer ${token}`}
         });     
        alert("Venue Inserted")
    setName("");
      setAddress("");
      setCity("");
      setMapLink("");
      setCapacity("");
      setTravelOptions([]);
      setGalleryImages([]);
       } catch (error) {
        alert("Insertion Failed")
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

    useEffect(() =>{
        fetchVenue();
        console.log(allVenues);
        
    },[])

      const deleteEvent = async (id) => {
          if (!window.confirm("Are you sure you want to delete this Venue?")) return;
      
          try {
            await axios.delete(`http://localhost:5000/api/venue/${id}`);
            
            alert("Venue Deleted Successfully");
      
            fetchVenue(); // refresh table
          }
          catch (error) {
            alert("Delete Failed");
          }
        };
  return (
    <div>
      <h2 className='text-center'>
        Manage Venue
      </h2>
      
<button
  type="button"
  class="btn btn-primary m-3"
  data-bs-toggle="modal"
  data-bs-target="#mainModal"
>
  Add Venue
</button>
  <div className="mt-3">
  <div className="card shadow-sm border-0 rounded-3 h-100" style={{ maxHeight: "75vh" }}>
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center py-2 px-3">
      <h6 className="mb-0 text-light">Venue List</h6>
      <span className="badge bg-light text-primary">
        Total: {allVenues?.length || 0}
      </span>
    </div>

    {/* ✅ Scrollable Table Area */}
    <div
      className="card-body p-0"
      style={{ overflowY: "auto", overflowX: "auto", maxHeight: "65vh", minWidth: "600px" }} // X + Y scroll
    >
      <table className="table table-hover table-striped align-middle mb-0">
        <thead className="table-light sticky-top">
          <tr>
            <th className="text-nowrap">Name</th>
            <th className="text-nowrap">Address</th>
            <th className="text-nowrap">City</th>
            <th className="text-nowrap">Map</th>
            <th className="text-nowrap">Capacity</th>
            <th className="text-nowrap">Images</th>
            <th className="text-nowrap">Travel Options</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(allVenues) && allVenues.length > 0 ? (
            allVenues.map((allven, index) => (
              <tr key={index}>
                <td className="fw-semibold text-nowrap">{allven.name}</td>
                <td style={{ whiteSpace: "normal", maxWidth: "200px" }}>
                  {allven.address}
                </td>
                <td className="text-nowrap">{allven.city}</td>
                <td>
                  <a
                    href={allven.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-primary fw-semibold"
                  >
                    View
                  </a>
                </td>
                <td className="text-nowrap">{allven.capacity}</td>
                <td>
                  {Array.isArray(allven.galleryImages) && allven.galleryImages.length > 0 ? (
                    <div className="d-flex flex-wrap gap-1">
                      {allven.galleryImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`venue-${i}`}
                          width={40}
                          height={40}
                          className="rounded shadow-sm"
                          style={{ objectFit: "cover" }}
                        />
                      ))}
                    </div>
                  ) : (
                    <span className="text-muted">No images</span>
                  )}
                </td>
                <td>
                  {Array.isArray(allven.travelOptions) && allven.travelOptions.length > 0 ? (
                    <ul className="list-unstyled mb-0 small">
                      {allven.travelOptions.map((opt, i) => (
                        <li key={i}>
                          <strong>{opt.mode}</strong> — {opt.description}{" "}
                          <a
                            href={opt.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary text-decoration-none"
                          >
                            Link
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-muted">No travel options</span>
                  )}
                </td>
                <td className="text-nowrap text-danger" style={{ cursor: "pointer" }}onClick={() => deleteEvent(allven._id)}>Delete</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-muted py-4">
                No venue data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>






{/* modal with travel */}


{/* <!-- 🟢 MAIN MODAL --> */}
<div
  class="modal fade"
  id="mainModal"
  tabindex="-1"
  aria-labelledby="mainModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
        <form onSubmit={eventSubmit}>
      <div class="modal-header">
        <h5 class="modal-title" id="mainModalLabel">Add Venue</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        {/* <!-- Venue Form --> */}
              <div class="input-group mb-3">
  <span className="input-group-text w-25" id="basic-addon1">Venue Name</span>
  <input type="text" value={name} onChange={(e) =>setName(e.target.value)} class="form-control"/>
</div>
         <div class="input-group mb-3">
  <span className="input-group-text w-25" id="basic-addon1">Venue Address</span>
  <input type="text" value={address} onChange={(e) =>setAddress(e.target.value)} class="form-control"/>
</div>
          <div class="input-group mb-3">
  <span className="input-group-text w-25" id="basic-addon1">Venue City</span>
  <input type="text" value={city} onChange={(e) =>setCity(e.target.value)} class="form-control"/>
</div>


   <div class="input-group mb-3">
  <span className="input-group-text w-25" id="basic-addon1">Venue Map</span>
  <input type="text" value={mapLink} onChange={(e) =>setMapLink(e.target.value)} class="form-control"/>
</div>
       <div class="input-group mb-3">
  <span className="input-group-text w-25" id="basic-addon1">Capacity</span>
  <input type="text" value={capacity} onChange={(e) =>setCapacity(e.target.value)} class="form-control"/>
</div>
  <div className="input-group mb-3">
                  <span className="input-group-text w-25">Gallery Images</span>
                  <input
                    type="file"
                    className="form-control"
                  />
                </div>



        {/* <!-- Button to open second modal --> */}
     <button
  type="button"
  class="btn btn-outline-primary"
  onClick={() => {
    const mainModalEl = document.getElementById("mainModal");
    const mainModal = bootstrap.Modal.getInstance(mainModalEl);
    if (mainModal) mainModal.hide(); // hide first modal before opening second

    const travelModalEl = document.getElementById("travelModal");
    const travelModal = new bootstrap.Modal(travelModalEl);
    setTimeout(() => travelModal.show(), 200); // small delay for animation
  }}
>
  Add Travel Options
</button>

         {travelOptions.length > 0 && (
                  <ul className="list-group mt-3">
                    {travelOptions.map((opt, index) => (
                      <li key={index} className="list-group-item">
                        <strong>{opt.mode}</strong> — {opt.description}{" "}
                        <a href={opt.linkUrl} target="_blank" rel="noreferrer">
                          {opt.linkUrl}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
      </div>
      <div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    onClick={() => {
      const travelModalEl = document.getElementById("travelModal");
      const travelModal = bootstrap.Modal.getInstance(travelModalEl);
      if (travelModal) travelModal.hide();

      setTimeout(() => {
        const mainModalEl = document.getElementById("mainModal");
        const mainModal = new bootstrap.Modal(mainModalEl);
        mainModal.show();
      }, 200);
    }}
  >
    Close
  </button>

 <button type="submit" class="btn btn-success">Save Venue</button>
</div>

      </form>
    </div>
  </div>
</div>

{/* <!-- 🔵 SECOND MODAL (Nested Travel Option Modal) --> */}
<div
  class="modal fade"
  id="travelModal"
  data-bs-backdrop="false"
  tabindex="-1"
  aria-labelledby="travelModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="travelModalLabel">Add Travel Options</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="mb-2">
          <label class="form-label">Mode of Travel</label>
          <select class="form-select"  value={mode}
                  onChange={(e) => setMode(e.target.value)}>
            <option value="Plane">Plane</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Car">Car</option>
          </select>
        </div>
        <div className="mb-2">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
        <div className="mb-2">
                <label className="form-label">Link URL</label>
                <input
                  type="text"
                  className="form-control"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Link Text</label>
                <input
                  type="text"
                  className="form-control"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                />
              </div>
               

      </div>
      <div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    onClick={() => {
      const travelModalEl = document.getElementById("travelModal");
      const travelModal = bootstrap.Modal.getInstance(travelModalEl);
      if (travelModal) travelModal.hide();

      // 🧹 Force remove backdrop manually
      document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "";

      // 🔵 Wait thoda (100ms) taake transition complete ho
      setTimeout(() => {
        const mainModalEl = document.getElementById("mainModal");
        const mainModal = new bootstrap.Modal(mainModalEl);
        mainModal.show();
      }, 150);
    }}
  >
    Close
  </button>

  <button
    type="button"
    class="btn btn-success"
    onClick={() => {
      if (!mode) return alert("Please select mode");
      const newOption = { mode, description, linkUrl, linkText };
      setTravelOptions([...travelOptions, newOption]);
      setDescription("");
      setLinkUrl("");
      setLinkText("")
      alert(`${mode} option added!`);

      const travelModalEl = document.getElementById("travelModal");
      const travelModal = bootstrap.Modal.getInstance(travelModalEl);
      if (travelModal) travelModal.hide();

      // 🧹 Backdrop remove kar
      document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "";

      setTimeout(() => {
        const mainModalEl = document.getElementById("mainModal");
        const mainModal = new bootstrap.Modal(mainModalEl);
        mainModal.show();
      }, 150);
    }}
  >
    Add Option
  </button>
</div>

    </div>
  </div>
</div>

    </div>
    
  )
}

export default VenueAdd
