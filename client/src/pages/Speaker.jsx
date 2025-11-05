import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Speaker() {
	const [allSpeaker, setSpeaker] = useState([])
	const fetchSpeaker = async ()=>{
			try {
				const res = await axios.get("http://localhost:5000/api/speaker/")
			setSpeaker(res.data);
			fetchSpeaker();
			
			} catch (error) {
				alert('Error fetching record:', error)
			}
		}
	
		useEffect(() =>{
			fetchSpeaker();
			console.log(allSpeaker);
			
		},[])
  return (
    <div>
      	<section id="speakers-section" className="speakers-section section">
		<div className="container">
			<h3 className="section-heading text-center mb-3">Speakers</h3>
			<div className="section-intro text-center single-col-max mx-auto mb-5">List your featured speakers here. You can provide more info about each speaker in the relevant modal windows. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			<div className="row">
{allSpeaker.map((speak, index) => (
  <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
    <div className="card shadow-sm border-0 h-100 rounded-3 overflow-hidden">

      <div className="image-container" style={{ height: "260px", overflow: "hidden" }}>
        <img
          src={`http://localhost:5000/uploads/${speak.image}`}
          className="card-img-top"
          alt={speak.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title fw-bold text-center mb-3">{speak.name}</h5>

        <p className="mb-2"><strong>Designation:</strong> {speak.designation}</p>
        <p className="mb-2"><strong>Bio:</strong> {speak.bio}</p>
        <p className="mb-0"><strong>Venue:</strong> {speak.venueId?.name || "N/A"}</p>
      </div>

      <div className="card-footer bg-light text-center">
        <ul className="social-list list-inline mb-0">
          <li className="list-inline-item mx-2"><a href="#"><i className="fa-brands fa-x-twitter fa-fw text-dark"></i></a></li>
          <li className="list-inline-item mx-2"><a href="#"><i className="fa-brands fa-linkedin-in fa-fw text-dark"></i></a></li>
          <li className="list-inline-item mx-2"><a href="#"><i className="fa-brands fa-github fa-fw text-dark"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
))}



				{/* <div className="col-6 col-lg-3 mb-4">
					<div className="card rounded-0">
						<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img src="assets/images/speakers/speaker-2.jpg" className="card-img-top rounded-0" alt=""/></a>
						<div className="card-body">
							<h5 className="card-title mb-2">Sarah Doe</h5>
							<div className="card-text mb-3">
								<div className="meta">Developer Advocate</div>
								<div className="meta">Google</div>
							</div>
							<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Read more &rarr;</a>
						</div>
						<div className="card-footer text-muted">
							<ul className="social-list list-inline mb-0">
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-6 col-lg-3 mb-4">
					<div className="card rounded-0">
						<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img src="assets/images/speakers/speaker-3.jpg" className="card-img-top rounded-0" alt=""/></a>
						<div className="card-body">
							<h5 className="card-title mb-2">Tim Doe</h5>
							<div className="card-text mb-3">
								<div className="meta">Software Developer</div>
								<div className="meta">React Core Team</div>
							</div>
							<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Read more &rarr;</a>
						</div>
						<div className="card-footer text-muted">
							<ul className="social-list list-inline mb-0">
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-6 col-lg-3 mb-4">
					<div className="card rounded-0">
						<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img src="assets/images/speakers/speaker-4.jpg" className="card-img-top rounded-0" alt=""/></a>
						<div className="card-body">
							<h5 className="card-title mb-2">Josh Doe</h5>
							<div className="card-text mb-3">
								<div className="meta">Founder &amp; CTO</div>
								<div className="meta">Startup Week</div>
							</div>
							<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Read more &rarr;</a>
						</div>
						<div className="card-footer text-muted">
							<ul className="social-list list-inline mb-0">
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-6 col-lg-3 mb-4">
					<div className="card rounded-0">
						<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img src="assets/images/speakers/speaker-5.jpg" className="card-img-top rounded-0" alt=""/></a>
						<div className="card-body">
							<h5 className="card-title mb-2">Ling Doe</h5>
							<div className="card-text mb-3">
								<div className="meta">Software Architect</div>
								<div className="meta">GitHub</div>
							</div>
							<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Read more &rarr;</a>
						</div>
						<div className="card-footer text-muted">
							<ul className="social-list list-inline mb-0">
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-6 col-lg-3 mb-4">
					<div className="card rounded-0">
						<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img src="assets/images/speakers/speaker-6.jpg" className="card-img-top rounded-0" alt=""/></a>
						<div className="card-body">
							<h5 className="card-title mb-2">Andy Doe</h5>
							<div className="card-text mb-3">
								<div className="meta">Senior Software Engineer</div>
								<div className="meta">X</div>
							</div>
							<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Read more &rarr;</a>
						</div>
						<div className="card-footer text-muted">
							<ul className="social-list list-inline mb-0">
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-6 col-lg-3 mb-4">
					<div className="card rounded-0">
						<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img src="assets/images/speakers/speaker-7.jpg" className="card-img-top rounded-0" alt=""/></a>
						<div className="card-body">
							<h5 className="card-title mb-2">Alice Doe</h5>
							<div className="card-text mb-3">
								<div className="meta">Senior Software Developer</div>
								<div className="meta">Facebook</div>
							</div>
							<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Read more &rarr;</a>
						</div>
						<div className="card-footer text-muted">
							<ul className="social-list list-inline mb-0">
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-6 col-lg-3 mb-4">
					<div className="card rounded-0">
						<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img src="assets/images/speakers/speaker-8.jpg" className="card-img-top rounded-0" alt=""/></a>
						<div className="card-body">
							<h5 className="card-title mb-2">Thomas Doe</h5>
							<div className="card-text mb-3">
								<div className="meta">Lead Developer</div>
								<div className="meta">Microsoft</div>
							</div>
							<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Read more &rarr;</a>
						</div>
						<div className="card-footer text-muted">
							<ul className="social-list list-inline mb-0">
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-x-twitter fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
								<li className="list-inline-item"><a  href="#"><i className="fa-brands fa-github fa-fw"></i></a></li>
							</ul>
						</div>
					</div>
				</div> */}
			</div>
			<div className="speakers-cta text-center py-3"><a className="btn btn-primary btn-lg" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/" target="_blank">Get Tickets</a></div>
		</div>
		
	</section>
	
	<div className="container">
		<hr/>
	</div>
	
    </div>
  )
}

export default Speaker
