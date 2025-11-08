import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Tickets() {
	const [allTickets, setAllTickets] = useState([]);
	const [ticket, setTicket] = useState("");

	const fetchTickets = async () => {
		try {
			const res = await axios.get("http://localhost:5000/api/ticket/")
			setAllTickets(res.data.getTicket)

		} catch (error) {
			alert('Error fetching record Tickets:', error)
		}
	}

	useEffect(() => {
		fetchTickets();


	}, [])
	return (
		<div>
			<section id="tickets-section" className="tickets-section section theme-bg-light">
				<div className="container">
					<h3 className="section-heading text-center mb-3">Tickets</h3>
					<div className="section-intro single-col-max mx-auto text-center mb-4">You can use 3rd party platforms such as <a className="theme-link" href="https://www.eventbrite.com/" target="_blank">eventbrite</a> and <a className="theme-link" href="https://www.tickettailor.com/" target="_blank">tickettailor</a> to sell your tickets.</div>

					<div className="row pricing mb-5" >
						{allTickets.map((tic, i) => (
							<div className="col-12 col-md-4 p-2 p-lg-4">
								<div className="card rounded-0 border-0">
									<div className="card-body p-0">
										<div className="heading  text-center p-3">
											<h4 className="text-white mb-0">{tic.name}</h4>
										</div>
										<div className="info p-3">
											<div className="price-figure text-center mb-3"><span className="currency">PKR.</span><span className="number">{tic.price}</span></div>
											<div className="desc px-3 text-center">
												Quantity : {tic.quantity}
											</div>
										</div>
									</div>
									<div className="heading  text-center p-3">
										<h4 className="text-white mb-0">Sold Tickets : {tic.sold}</h4>
									</div>

								</div>
							</div>
						))}
					</div>
					<div className="card-footer text-center mb-5">
						<a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy Tickets</a>
					</div>

					<div className="offers text-center bg-white p-4 p-lg-5">
						<h4 className="mb-3">What's included?</h4>
						<ul className="offers-list list-unstyled d-inline-block mx-auto text-start">
							<li><span className="icon-holder me-2"><i className="fas fa-user-tie"></i></span>60+ talks from industry-leading speakers</li>
							<li><span className="icon-holder me-2"><i className="fas fa-people-carry"></i></span>Access to 40+ workshops</li>
							<li><span className="icon-holder me-2"><i className="fas fa-glass-cheers"></i></span>Amazing after-parties</li>
							<li><span className="icon-holder me-2"><i className="fas fa-utensils"></i></span>FREE drinks, refreshments, lunch and dinner</li>
							<li><span className="icon-holder me-2"><i className="fas fa-tshirt"></i></span>FREE <a href="https://made4dev.com/" target="_blank">premium developer tees from made4dev</a></li>
							<li><span className="icon-holder me-2"><i className="fas fa-book"></i></span>FREE Udemy courses</li>
							<li><span className="icon-holder me-2"><i className="fas fa-gift"></i></span>FREE <a href="https://themes.3rdwavemedia.com/freebies/" target="_blank">Bootstrap templates and digital resources</a> for developers worth over $100</li>
						</ul>
					</div>

				</div>
			</section>
			{/* <!-- Modal --> */}
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<form >
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">Add Speaker</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>

							<div className="modal-body">
								<div className="mb-3">

									<label className="form-label">Ticket Name</label>
									<input type="text" className="form-control" />
								</div>
								<div className="mb-3">
									<label className="form-label">Price</label>
									<input type="number" className="form-control" />
								</div>
								<div className="mb-3">
									<label className="form-label">Quantity</label>
									<input type="number" className="form-control" />
								</div>
								<div className="mb-2">
									<label className="form-label">Select Tickets</label>
									<select className="form-select" value={ticket} onChange={(e) =>setAllTickets(e.target.value)}
									>
										<option value="">Select</option>  {/* ← Empty value agar select nahi hua */}
											{allTickets.map((tkc,i)=>(
												<option key={i} value={tkc._id}>
												{tkc.name}
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

export default Tickets
