import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Tickets() {
	const navigate = useNavigate();
	const [userId, setUserId] = useState("");
	const [eventId, setEventid] = useState("");
	const [ticketId, setTicketId] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [allevent, setAllEvent] = useState([]);
	const [allticket, setAllTickets] = useState([]);
	
 

	const fetchTickets = async () => {
		try {
			const res = await axios.get("http://localhost:5000/api/ticket/")
			setAllTickets(res.data.getTicket)

		} catch (error) {
			alert('Error fetching record Tickets:', error)
		}
	}
	const fetchEvent = async () => {
		try {
			const res = await axios.get("http://localhost:5000/api/event/")
			setAllEvent(res.data.getEvent)

		} catch (error) {
			alert('Error fetching record Events:', error)
		}
	}
		const handleuser = ()=>{
			const token = localStorage.getItem("token")

			if (!token) {
				alert("Please login first to book your ticket!");
        navigate("/login"); // redirect to login
        return;
			}
			 const myModal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
			
		}
		
		useEffect(() => {
			fetchTickets();
			fetchEvent();
			const id = localStorage.getItem("id")
			console.log("Get User Id :", id);
			setUserId(id)
		}, [])

		useEffect(()=>{
			if (userId) {
				console.log("Now user id updated:", userId);
			}
		},[userId])

		const bookSubmit = async (e)=>{
			e.preventDefault();
			try {
				const bookdata = {
					userId, eventId, ticketId, quantity: Number(quantity)
				}
				axios.post("http://localhost:5000/api/book/create", bookdata)
				alert("Booking Successfull")
			} catch (error) {
				alert("Booking failed");
			}
			
		}
		
	return (
		<div>
			<section id="tickets-section" className="tickets-section section theme-bg-light">
				<div className="container">
					<h3 className="section-heading text-center mb-3">Tickets</h3>
					<div className="section-intro single-col-max mx-auto text-center mb-4">You can use 3rd party platforms such as <a className="theme-link" href="https://www.eventbrite.com/" target="_blank">eventbrite</a> and <a className="theme-link" href="https://www.tickettailor.com/" target="_blank">tickettailor</a> to sell your tickets.</div>

					<div className="row pricing mb-5" >
						{allticket.map((tic, i) => (
							<div className="col-12 col-md-4 p-2 p-lg-4">
								<div className="card rounded-0 border-0">
									<div className="card-body p-0">
										<div className="heading  text-center p-3">
											<h4 className="text-white mb-0">{tic.name}</h4>
										</div>
										<div className="info p-3">
											<div className="price-figure text-center mb-3"><span className="currency">PKR </span><span className="number">{tic.price}</span></div>
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
						<a href="#tickets-section" className="btn btn-success" onClick={handleuser}>Buy Tickets</a>
					</div>

					<div className="offers text-center bg-white p-4 p-lg-5">
						<h4 className="mb-3">What's included?</h4>
						<ul className="offers-list list-unstyled d-inline-block mx-auto text-start">
							<li><span className="icon-holder me-2"><i className="fas fa-user-tie"></i></span>60+ talks from industry-leading speakers</li>
							<li><span className="icon-holder me-2"><i className="fas fa-people-carry"></i></span>Access to 40+ workshops</li>
							<li><span className="icon-holder me-2"><i className="fas fa-glass-cheers"></i></span>Amazing after-parties</li>
							<li><span className="icon-holder me-2"><i className="fas fa-utensils"></i></span>FREE drinks, refreshments, lunch and dinner</li>
					
						</ul>
					</div>

				</div>
			</section>
			{/* <!-- Modal --> */}
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<form onSubmit={bookSubmit}>
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">Add Speaker</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>

							<div className="modal-body">
								{/* <div className="mb-3">

									<label className="form-label">Ticket Name</label>
									<input type="text" className="form-control" />
								</div> */}
								{/* <div className="mb-3">
									<label className="form-label">Price</label>
									<input type="number" className="form-control" />
								</div> */}
								<div className="mb-3">
									<label className="form-label">Quantity</label>
									<input type="number" className="form-control" value={quantity} onChange={(e) =>setQuantity(e.target.value)}  />
								</div>
								<div className="mb-2">
									<label className="form-label">Select Event</label>
									<select className="form-select" value={eventId} onChange={(e) => setEventid(e.target.value)}
									>
										<option value="">Select</option>  {/* ← Empty value agar select nahi hua */}
											{allevent.map((event,i)=>(
												<option key={i} value={event._id}>
												{event.title}
										</option>
											))}
									</select>

								</div>
								<div className="mb-2">
									<label className="form-label">Select Tickets</label>
									<select className="form-select" value={ticketId} onChange={(e) =>setTicketId(e.target.value)}
									>
										<option value="">Select</option>  {/* ← Empty value agar select nahi hua */}
											{allticket.map((tkc,i)=>(
												<option key={i} value={tkc._id}>
												{tkc.name}
										</option>
											))}
									</select>

								</div>
							</div>

							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="submit" className="btn btn-primary">Buy Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tickets
