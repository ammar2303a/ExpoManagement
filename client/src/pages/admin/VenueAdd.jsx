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
    const newOption = { mode, description, linkUrl };
    setTravelOptions([...travelOptions, newOption]);
    setDescription("");
    setLinkUrl("");
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
    },[])

  return (
    <div>
      <h2 className='text-center'>
        Manage Venue
      </h2>
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Venues
        </button> */}
        {/* <!-- Button to open main modal --> */}
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#mainModal"
>
  Add Venue
</button>
      <table className="table mt-3">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Map</th>
      <th scope="col">Capacity</th>
      <th scope="col">Images</th>
      <th scope="col">Travel Options</th>

    </tr>
  </thead>
 <tbody>
  {allVenues.map((allven, index) => (
    <tr key={index}>
      <td>{allven.name}</td>
      <td>{allven.address}</td>
      <td>{allven.city}</td>
      <td>
        <a href={allven.mapLink} target="_blank" rel="noreferrer">
          View Map
        </a>
      </td>
      <td>{allven.capacity}</td>
      <td>{allven.galleryImages}</td>

      {/* ✅ New Column for Travel Options */}
      <td>
        {allven.travelOptions && allven.travelOptions.length > 0 ? (
          <ul className="list-unstyled mb-0">
            {allven.travelOptions.map((opt, i) => (
              <li key={i}>
                <strong>{opt.mode}</strong> — {opt.description}{" "}
                <a href={opt.linkUrl} target="_blank" rel="noreferrer">
                  Link
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <span>No travel options</span>
        )}
      </td>
    </tr>
  ))}
</tbody>

</table>


{/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
       <form onSubmit={eventSubmit}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

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

</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
    </form> 
    </div>
  </div>
</div> */}



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
      const newOption = { mode, description, linkUrl };
      setTravelOptions([...travelOptions, newOption]);
      setDescription("");
      setLinkUrl("");
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
