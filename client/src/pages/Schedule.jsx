import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function Schedule() {
	const [allShedule, setShedule] = useState([])
	const fetchShedule = async () => {
		try {
			const res = await axios.get("http://localhost:5000/api/shedule/")

			setShedule(res.data.getShedule)
		} catch (error) {
			alert('Error fetching record:', error)
		}
	}

	useEffect(() => {
		fetchShedule();


	}, [])

	return (
		<div>
			<section id="schedule-section" className="schedule-section section">
				<div className="container">
					<h3 className="section-heading text-center mb-5">Schedule</h3>

					{/* ===== Tabs (Days) ===== */}
					<ul className="schedule-nav nav nav-pills nav-fill" id="myTab" role="tablist">
						{Array.isArray(allShedule) && allShedule.map((shed, index) => (
							<li className="nav-item me-2" key={index}>
								<a
									className={`nav-link ${index === 0 ? "active" : ""}`}
									id={`tab-${index}`}
									data-bs-toggle="tab"
									href={`#tab-${index}-content`}
									role="tab"
									aria-controls={`tab-${index}-content`}
									aria-selected={index === 0 ? "true" : "false"}
								>
									<span className="heading">{shed.dayTitle}</span>
									<span className="meta">({shed.date})</span>
								</a>
							</li>
						))}
					</ul>

					{/* ===== Tab Content ===== */}
					<div className="schedule-tab-content tab-content">
						{Array.isArray(allShedule) && allShedule.map((day, i) => (
							<div
								key={i}
								className={`tab-pane ${i === 0 ? "active" : ""}`}
								id={`tab-${i}-content`}
								role="tabpanel"
								aria-labelledby={`tab-${i}`}
							>
								{/* Each Day's Sessions */}
								{Array.isArray(day.sessions) && day.sessions.length > 0 ? (
									day.sessions.map((session, j) => (
										<div className="item item-talk" style={{ marginTop: "25px", fontWeight: "600" }} key={j}>
											<div className="meta">
												<h4 className="time mb-3">
													{session.timeStart} - {session.timeEnd}
												</h4>
												<div className="profile">
													<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">
														<img
															style={{
																width: "80px",
																height: "80px",
																objectFit: "cover",
																objectPosition: "top center",
																border: "2px solid #ddd",
															}}
															className="profile-image rounded-circle mb-2"
															src={`http://localhost:5000/uploads/${session.speaker?.image}`}
															alt=""
														/>
													</a>
													<div className="name">
														<a
															className="theme-link"
															href="#modal-speaker-1"
															data-bs-toggle="modal"
															data-bs-target="#modal-speaker-1"
														>
															{session.speaker?.name || "Speaker"}
														</a>
													</div>
												</div>
											</div>

											<div className="content">
												<h3 className="title mb-3">{session.title}</h3>
												<div className="location mb-3">
													<i className="fas fa-map-marker-alt me-2"></i>
													{session.venue?.name || session.room || "Venue not set"}
												</div>
												<div className="desc">{session.description}</div>
											</div>
										</div>
									))
								) : (
									<h4 className="text-center py-5 text-muted">No sessions found for this day.</h4>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

		</div>
	)
}

export default Schedule
