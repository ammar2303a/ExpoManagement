import React from 'react'
import About from './About'
import Speaker from './Speaker'
import Schedule from './Schedule'
import Tickets from './Tickets'
import Venue from './Venue'
import Sponsors from './Sponsors'

function Home() {
  return (
    <div>
      <div id="hero-block" className="hero-block">
		<div id="hero-carousel" className="hero-carousel carousel slide carousel-fade" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item-1 carousel-item active">
				</div>
				<div className="carousel-item-2 carousel-item">
				</div>
				<div className="carousel-item-3 carousel-item">
				</div>
			</div>
		</div>
		<div className="hero-block-mask"></div>
		<div className="container">
			<div className="hero-text-block">
				<h1 className="hero-heading mb-2">DevConf 2028</h1>
				<div className="hero-meta mb-3"><i className="far fa-calendar-alt me-2"></i>12 - 15 Oct <i className="fas fa-map-marker-alt mx-2"></i>New York, USA</div>
				<div className="hero-intro mb-4">The #1 Bootstrap Template for <br/>Tech Conferences and Events.</div>
				<div className="hero-cta"><a className="btn btn-primary btn-lg" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/" target="_blank">Get Tickets</a></div>
				
			</div>
		</div>

	</div>
	
	<div className="stats-block theme-bg-primary text-white py-4 text-center">
		<div className="container">
			<div className="row">
				<div className="col-6 col-md-3">
					<div className="item">
						<div className="number">2000+</div>
						<div className="unit">Attendees</div>
					</div>
				</div>
				<div className="col-6 col-md-3">
					<div className="item">
						<div className="number">3</div>
						<div className="unit">Days</div>
					</div>
				</div>
				<div className="col-6 col-md-3">
					<div className="item">
						<div className="number">60+</div>
						<div className="unit">Talks</div>
					</div>
				</div>
				<div className="col-6 col-md-3">
					<div className="item">
						<div className="number">10+</div>
						<div className="unit">Workshops</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<About/>
  <Speaker/>
  <Schedule/>
  <Tickets/>
  <Venue/>
  <Sponsors/>

    </div>
  )
}

export default Home
