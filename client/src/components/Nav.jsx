import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import About from '../pages/About';
import Speaker from '../pages/Speaker';
import Schedule from '../pages/Schedule';
import Tickets from '../pages/Tickets';
import Venue from '../pages/Venue';
import Sponsors from '../pages/Sponsors';
import { useEffect } from 'react';

function Nav() {
   useEffect(() => {
    const header = document.getElementById("header");

    const headerAnimation = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        header.classList.add("header-shrink");
      } else {
        header.classList.remove("header-shrink");
      }
    };

    // events attach kar rahe hain
    window.onload = headerAnimation;
    window.onresize = headerAnimation;
    window.onscroll = headerAnimation;

    // cleanup function (React rule)
    return () => {
      window.onload = null;
      window.onresize = null;
      window.onscroll = null;
    };
  }, []);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logoutsubmit = () =>{
    localStorage.removeItem("token")
    navigate("/login")

    const handlescroll = (e, id) =>{
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({behavior: "smooth"})
      }
    }
    
  }
  return (
    <>
 <header id="header" className="header fixed-top">	    
		<div className="branding">
			<div className="container-fluid">
				<nav className="main-nav navbar navbar-expand-lg">
					<div className="site-logo"><Link className="scrollto" to="/"><img className="logo-icon" src="assets/images/logo-white.svg" alt="logo"/></Link></div>    
					
					<div className="navbar-btn order-lg-2"><Link className="btn btn-secondary" to="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/" target="_blank">Tickets</Link></div>
					
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div id="navigation" className="navbar-collapse collapse  justify-content-lg-end me-lg-3">
						<ul className="nav navbar-nav">
							
							<li className="nav-item"><Link className="nav-link scrollto" to="#about-section" onClick={(e) =>handlescroll(e, About)}>About</Link></li>                                              
							<li className="nav-item"><Link className="nav-link scrollto" to="#speakers-section" onClick={(e) =>handlescroll(e, Speaker)}>Speakers</Link></li>
							<li className="nav-item"><Link className="nav-link scrollto" to="#schedule-section" onClick={(e) =>handlescroll(e, Schedule)}>Schedule</Link></li>
							<li className="nav-item"><Link className="nav-link scrollto" to="#tickets-section" onClick={(e) =>handlescroll(e, Tickets)}>Tickets</Link></li>
							<li className="nav-item"><Link className="nav-link scrollto" to="#venue-section" onClick={(e) =>handlescroll(e, Venue)}>Venue</Link></li>
							<li className="nav-item"><Link className="nav-link scrollto" to="#sponsors-section"onClick={(e) =>handlescroll(e, Sponsors)}>Sponsors</Link></li>
              {!token ? (
                <>
                 <li className="nav-item"><Link className="nav-link scrollto" to="/login">Login</Link></li>
							<li className="nav-item"><Link className="nav-link scrollto" to="/register">Register</Link></li>
                </>
              ):(
                <>
             	<li className="nav-item"><Link className="nav-link scrollto" to="/login" onClick={logoutsubmit}>Logout</Link></li>

                </>
              )}
             


						</ul>
					</div>
      

				</nav>
				
			</div>
		</div>
	</header>
    </>
  )
}

export default Nav
