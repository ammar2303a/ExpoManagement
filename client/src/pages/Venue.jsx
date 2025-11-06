import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Venue() {
	 const [venues, setVenue] = useState([]);

	    const fetchVenue = async ()=>{
        try {
            const res = await axios.get("http://localhost:5000/api/venue/")
			console.log("API Response:", res.data);
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
<section
      id="venue-section"
      className="venue-section section theme-bg-primary text-white"
    >
      <div className="container">
        <h3 className="section-heading text-center mb-5 text-white">Venue</h3>

        {venues.map((venue, index) => (
          <div key={index} className="row gx-5 py-lg-5">
            {/* ✅ Left Side - Venue Info */}
            <div className="col-12 col-lg-7 h-100">
              <div className="desc">
                <h4 className="text-white mb-3">{venue.name}</h4>
                

                {/* ✅ Travel Options Section */}
                <h4 className="text-white mb-3 mt-4">How To Get Here</h4>
				<p>
                  Address: {venue.address}, {venue.city} <br />
                  Capacity: {venue.capacity}
                </p>
                <div className="row pt-3">
                  {venue.travelOptions && venue.travelOptions.length > 0 ? (
                    venue.travelOptions.map((opt, i) => (
                      <div key={i} className="col-12 col-md-6 mb-4">
                        <div className="grid-item p-4"  >
                          <h5 className="text-white mb-3 title">
                            <i className={`fas fa-${opt.icon || "plane"} me-2`}></i>
                            {opt.mode}
                          </h5>
                          <p>{opt.description}</p>
                          <a
                            className="text-white"
                            href={opt.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {opt.linkText} →
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No travel options available.</p>
                  )}
                </div>

                {/* ✅ Optional: Facilities Section */}
                <h4 className="text-white mb-4 mt-3 mt-lg-5">
                  Facilities &amp; Accommodations
                </h4>
                <p>
                  Your venue info goes here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Proin consequat magna eu accumsan
                  mattis.
                </p>
                <a className="btn btn-ghost" href="#">
                  Search Hotels
                </a>
              </div>
            </div>

            {/* ✅ Right Side - Gallery Images */}
            <div className="col-12 col-xl-3 col-lg-4 offset-lg-1 position-relative h-100 mt-5 mt-lg-0">
              <div className="figures-holder">
                {venue.galleryImages && venue.galleryImages.length > 0 ? (
                  venue.galleryImages.map((img, i) => (
                    <div key={i} className={`figure figure-${i + 1}`}>
                      <img className="shadow" src={img} alt={`Venue ${i}`} />
                    </div>
                  ))
                ) : (
                  <p>No images available.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
	<style>
{`
  .grid-item {
    min-height: 220px;  /* sab boxes equal height */
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
  }
  .grid-item p {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* sirf 3 line show kare */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`}
</style>

=======
      	
	<section id="venue-section" className="venue-section section  theme-bg-primary text-white">
		<div className="container">
			<h3 className="section-heading text-center mb-5 text-white">Venue</h3>
			<div className="row gx-5 py-lg-5">
				<div className="col-12 col-lg-7 h-100">
					<div className="desc">
						<h4 className="text-white mb-3">How To Get Here</h4>
						<p>Your venue info goes here. Sed feugiat nibh lorem, a laoreet sem aliquet ut. Praesent tincidunt efficitur nisi, ut eleifend diam tempor sit amet. Aliquam volutpat ex feugiat, semper urna a, pharetra lacus. Sed eget eros cursus, consequat lectus ultricies, efficitur metus. Sed sit amet mauris faucibus magna finibus convallis vel quis justo. Curabitur ultricies sagittis erat, quis faucibus lectus tempor vitae. Proin sodales, elit vitae accumsan efficitur, orci quam molestie orci, accumsan tincidunt dui turpis sed libero. Duis id vehicula ex. In quis pellentesque lorem, ut sollicitudin mauris.</p>
						
						<div className="row pt-3">
							<div className="col-12 col-md-6 mb-4">
								{}
								<div className="grid-item p-4">
									<h5 className="text-white mb-3 title"><i className="fas fa-plane-departure me-2"></i>By Plane</h5>
									<p>Aliquam gravida, enim et efficitur feugiat, tellus ligula scelerisque orci, et sagittis erat lectus sit amet orci.</p>
									<a className="text-white" href="#">Search Tickets &rarr;</a>
								</div>
							</div>
							<div className="col-12 col-md-6 mb-4">
								<div className="grid-item p-4">
									<h5 className="text-white mb-3 title"><i className="fas fa-car me-2"></i>By Car</h5>
									<p>Aliquam gravida, enim et efficitur feugiat, tellus ligula scelerisque orci, et sagittis erat lectus sit amet orci.</p>
									<a className="text-white" href="#">Check Route &rarr;</a>
								</div>
							</div>
							<div className="col-12 col-md-6 mb-4">
								<div className="grid-item p-4">
									<h5 className="text-white mb-3 title"><i className="fas fa-bus-alt me-2"></i>By Bus</h5>
									<p>Aliquam gravida, enim et efficitur feugiat, tellus ligula scelerisque orci, et sagittis erat lectus sit amet orci. </p>
									<a className="text-white" href="#">Book Tickets &rarr;</a>
								</div>
							</div>
							<div className="col-12 col-md-6 mb-4">
								<div className="grid-item p-4">
									<h5 className="text-white mb-3 title"><i className="fas fa-subway me-2"></i>By Train</h5>
									<p>Aliquam gravida, enim et efficitur feugiat, tellus ligula scelerisque orci, et sagittis erat lectus sit amet orci.</p>
									<a className="text-white" href="#">Book Tickets &rarr;</a>
								</div>
							</div>
						</div>
						<h4 className="text-white mb-4 mt-3 mt-lg-5">Facilities &amp; Accommodations</h4>
						<p>Your venue info goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat magna eu accumsan mattis. Duis non augue porttitor, fringilla velit vitae, ultricies eros. Sed libero eros, tristique ac orci nec, hendrerit dictum lacus. Aenean iaculis massa felis, eget venenatis turpis lacinia sit amet. </p>
						<a className="btn btn-ghost" href="#">Search Hotels</a>
					</div>
				</div>
				<div className="col-12 col-xl-3 col-lg-4 offset-lg-1 position-relative h-100 mt-5 mt-lg-0">
					<div className="figures-holder">
						<div className="figure figure-1"><img className="shadow" src="assets/images/venue/venue-1.jpg" alt=""/></div>
						<div className="figure figure-2"><img className="shadow" src="assets/images/venue/venue-2.jpg" alt=""/></div>
						<div className="figure figure-3"><img className="shadow" src="assets/images/venue/venue-3.jpg" alt=""/></div>
						<div className="figure figure-4"><img className="shadow" src="assets/images/venue/venue-4.jpg" alt=""/></div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Venue
