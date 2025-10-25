import React from 'react'

function Schedule() {
  return (
    <div>
      	<section id="schedule-section" className="schedule-section section">
		<div className="container">
			<h3 className="section-heading text-center mb-5">Schedule</h3>
			
			
			<ul className="schedule-nav nav nav-pills nav-fill" id="myTab" role="tablist">
				<li className="nav-item me-2">
					<a className="nav-link active" id="tab-1" data-bs-toggle="tab" href="#tab-1-content" role="tab" aria-controls="tab-1-content" aria-selected="true">
						<span className="heading">Day 1</span>
						<span className="meta">(Wed 12, Oct)</span>
					</a>
				</li>
				<li className="nav-item me-2">
					<a className="nav-link" id="tab-2" data-bs-toggle="tab" href="#tab-2-content" role="tab" aria-controls="tab-2-content" aria-selected="false">
						<span className="heading">Day 2</span>
						<span className="meta">(Thu 13, Oct)</span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="tab-3" data-bs-toggle="tab" href="#tab-3-content" role="tab" aria-controls="tab-3-content" aria-selected="false">
						<span className="heading">Day 3</span>
						<span className="meta">(Fri 14, Oct)</span>
					</a>
				</li>
			</ul>
			
			
			<div className="schedule-tab-content tab-content">
				<div className="tab-pane active" id="tab-1-content" role="tabpanel" aria-labelledby="tab-1">
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">9:00 - 9:30</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-1.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">James Doe</a></div>
							</div>
						</div>
						<div className="content">
							<h3 className="title mb-3">Best Practices And Tips For A Clean Angular Application</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room A</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">9:30 - 10:00</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-2.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Sarah Doe</a></div>
							</div> 
						</div>
						<div className="content">
							<h3 className="title mb-3">Developer Productivity</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room A</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-other">
						<div className="meta">
							<h4 className="time mb-3">10:00 - 10:30</h4>
						</div>
						<div className="content">
							<h3 className="title mb-3">Coffee Break</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Room A5</div>
							<div className="desc">Coffee and cakes lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
						</div>
					</div>
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">10:30 - 11:00</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-3.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Tim Doe</a></div>
							</div>
						</div>
						<div className="content">
							<h3 className="title mb-3">Progressive Web Apps with React.js</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room A</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">11:00 - 12:00</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-4.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Josh Doe</a></div>
							</div>
						</div>
						<div className="content">
							<h3 className="title mb-3">Talk Title Lorem Ipsum</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room B</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-other">
						<div className="meta">
							<h4 className="time mb-3">12:00 - 13:30</h4>
						</div>
						<div className="content">
							<h3 className="title mb-3">Lunch Break</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Room B6</div>
							<div className="desc">Buffet lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
						</div>
					</div>
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">13:30 - 14:30</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-5.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Ling Doe</a></div>
							</div>
						</div>
						<div className="content">
							<h3 className="title mb-3">Talk Title Lorem Ipsum</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room C</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">14:30 - 15:30</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-6.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Andy Doe</a></div>
							</div>
						</div>
						<div className="content">
							<h3 className="title mb-3">Talk Title Lorem Ipsum</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room C</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">15:30 - 16:30</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-7.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Alice Doe</a></div>
							</div>
						</div>
						<div className="content">
							<h3 className="title mb-3">Talk Title Lorem Ipsum</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room C</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-talk">
						<div className="meta">
							<h4 className="time mb-3">16:30 - 17:30</h4>
							<div className="profile">
								<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img className="profile-image rounded-circle  mb-2" src="assets/images/speakers/speaker-8.jpg" alt=""/></a>
								<div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Thomas Doe</a></div>
							</div>
						</div>
						<div className="content">
							<h3 className="title mb-3">Talk Title Lorem Ipsum</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Conference Room C</div>
							<div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					<div className="item item-other">
						<div className="meta">
							<h4 className="time mb-3">18:00 - 24:00</h4>
						</div>
						<div className="content">
							<h3 className="title mb-3">Dinner &amp; After-party</h3>
							<div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Bar Lorem Ipsum</div>
							<div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur ullamcorper. </div>
						</div>
					</div>
					
				</div>
				<div className="tab-pane no-timeline" id="tab-2-content" role="tabpanel" aria-labelledby="tab-2">
					<h4 className="text-center py-5 text-muted">Day 2 Agenda Coming Soon...</h4>
				</div>
				<div className="tab-pane no-timeline" id="tab-3-content" role="tabpanel" aria-labelledby="tab-3">
					<h4 className="text-center py-5 text-muted">Day 3 Agenda Coming Soon...</h4>
				</div>
			</div>
			<div className="schedule-cta text-center mx-auto"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/" className="btn btn-primary btn-lg me-md-2 d-block d-md-inline-block mb-3 mb-md-0" target="_blank">Download Schedule</a><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/" className="btn btn-secondary btn-lg d-block d-md-inline-block" target="_blank">Buy Tickets</a></div>
		</div>
	</section>
    </div>
  )
}

export default Schedule
