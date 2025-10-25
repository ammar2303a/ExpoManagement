import React from 'react'

function About() {
  return (
    <div>
       <section id="about-section" className="about-section section theme-bg-light">
		<div className="container">
			<h3 className="section-heading text-center mb-3">About DevConf</h3>
			<div className="section-intro single-col-max mx-auto mb-4">Briefly introduce your conference or event here. You should convince people why they should attend with a list of benefits. <strong>Are you a conference organizer? Want to source developer t-shirts as part of your conference package?</strong> Check out our programming tees at <a href="https://made4dev.com/" target="_blank">made4dev.com</a> - developers love them! Want to get a bulk discount or just want to use one of the t-shirt designs? Please email <a href="mailto:hello@made4dev.com">hello@made4dev.com</a> and we can discuss.</div>
			<div className="benefits-list text-center mb-3">
				<h4 className="text-center mb-4">Why Join Us</h4>
				<ul className="list-unstyled text-start d-inline-block">
					<li><i className="fas fa-check-circle me-2"></i>Unique chance to lorem ipsum dolor</li>
					<li><i className="fas fa-check-circle me-2"></i>Learn from the best in the industry</li>
					<li><i className="fas fa-check-circle me-2"></i>Discover the best tools and practices</li>
					<li><i className="fas fa-check-circle me-2"></i>Meet developers from all over the world</li>
					<li><i className="fas fa-check-circle me-2"></i>Grow your network</li>
					<li><i className="fas fa-check-circle me-2"></i>Practical workshops to lorem ipsum dolor</li>
					<li><i className="fas fa-check-circle me-2"></i>After-party lorem ipsum dolor</li>
					<li><i className="fas fa-check-circle me-2"></i>Free <a href="https://made4dev.com">developer t-shirts</a> and swag</li>
				</ul>
			</div>
			<div className="event-countdown text-center mb-3">		   
				<h4 className="countdown-intro mb-2 text-center mb-3">Event Starts In:</h4>
				<div id="countdown-box" className="countdown-box"></div>
			</div>
			<div className="about-cta text-center mb-5"><a className="btn btn-secondary btn-lg  mb-5" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/" target="_blank">Get Your Ticket Today</a></div>
		</div>

		<div className="media-block theme-bg-primary py-5">
			<div className="container">
				<h4 className="text-white text-center mb-3">Previously</h4>
				<div className="section-intro text-center single-col-max mx-auto text-white mb-5">Conference videos and images from previous years is a great way to show people what to expect at the conference and entice them to join. You can host more media content on YouTube, Flickr or Instagram and link out to them in this section.</div>
				<div className="row gx-md-5">
					<div className="col-12 col-md-6 mb-3">
						<div className="ratio ratio-16x9">
							
							<iframe src="https://www.youtube.com/embed/stjniziaxy4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
					<div className="col-12 col-md-6 mb-md-5">
						<div className="ratio ratio-16x9">
							<iframe src="https://www.youtube.com/embed/NPYqnGNO_zw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default About
