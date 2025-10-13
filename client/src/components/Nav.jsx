import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <Link to="/" className="logo d-flex align-items-center me-auto">
        <img src="assets/img/logo.png" alt=""/>
    
         {/* <h1 className="sitename">TheEvent</h1>  */}
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/" className="active">Home<br/></Link></li>
          <li><Link to="#speakers">Speakers</Link></li>
          <li><Link to="#schedule">Schedule</Link></li>
          <li><Link to="#venue">Venue</Link></li>
          <li><Link to="#hotels">Hotels</Link></li>
          <li><Link to="#gallery">Gallery</Link></li>
          <li className="dropdown"><Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link to="#">Dropdown 1</Link></li>
              <li className="dropdown"><Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link to="#">Deep Dropdown 1</Link></li>
                  <li><Link to="#">Deep Dropdown 2</Link></li>
                  <li><Link to="#">Deep Dropdown 3</Link></li>
                  <li><Link to="#">Deep Dropdown 4</Link></li>
                  <li><Link to="#">Deep Dropdown 5</Link></li>
                </ul>
              </li>
              <li><Link to="#">Dropdown 2</Link></li>
              <li><Link to="#">Dropdown 3</Link></li>
              <li><Link to="#">Dropdown 4</Link></li>
            </ul>
          </li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <Link className="cta-btn d-none d-sm-block" to="#buy-tickets">Buy Tickets</Link>

    </div>
  </header>
    </div>
  )
}

export default Nav
