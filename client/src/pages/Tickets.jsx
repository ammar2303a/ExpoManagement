import React from 'react'

function Tickets() {
  return (
    <div>
      <section id="tickets-section" className="tickets-section section theme-bg-light">
		<div className="container">
			<h3 className="section-heading text-center mb-3">Tickets</h3>
			<div className="section-intro single-col-max mx-auto text-center mb-4">You can use 3rd party platforms such as <a className="theme-link" href="https://www.eventbrite.com/" target="_blank">eventbrite</a> and <a className="theme-link" href="https://www.tickettailor.com/" target="_blank">tickettailor</a> to sell your tickets.</div>
			
			<div className="row pricing mb-5">
				<div className="col-12 col-md-4 p-2 p-lg-4">
					<div className="card rounded-0 border-0">
						<div className="card-body p-0">
							<div className="heading  text-center p-3">
								<h4 className="text-white mb-0">Super Early Bird</h4>
							</div>
							<div className="info p-3">
								<div className="price-figure text-center mb-3"><span className="currency">$</span><span className="number">250</span></div>
								<div className="desc px-3">
									Purchase before 1st Oct. Only 50 tickets available. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								</div>
							</div>
						</div>
						<div className="card-footer text-center">
							<a href="#" className="btn btn-primary disabled">SOLD OUT</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4 p-2 p-lg-4">
					<div className="card card-special rounded-0 border-0">
						<div className="card-body p-0">
							<div className="heading  text-center p-3">
								<h4 className="text-white mb-0">Early Bird</h4>
							</div>
							<div className="info p-3">
								<div className="price-figure text-center"><span className="currency">$</span><span className="number">350</span></div>
								<div className="desc px-3">
									Purchase before 1st June 2022. Only 100 tickets available. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								</div>
							</div>
						</div>
						<div className="card-footer text-center">
							<a href="#" className="btn btn-primary">Buy Now</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4 p-2 p-lg-4">
					<div className="card rounded-0 border-0">
						<div className="card-body p-0">
							<div className="heading  text-center p-3">
								<h4 className="text-white mb-0">Regular</h4>
							</div>
							<div className="info p-3">
								<div className="price-figure text-center mb-3"><span className="currency">$</span><span className="number">500</span></div>
								<div className="desc px-3">
									Additional freebies and benefits included. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 						    
								</div>
							</div>
						</div>
						<div className="card-footer text-center">
							<a href="#" className="btn btn-primary">Buy Now</a>
						</div>
					</div>
				</div>
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
    </div>
  )
}

export default Tickets
