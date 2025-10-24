import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")

  const logouthandle =() =>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <div>
       <div id="preloder">
        <div className="loader"></div>
    </div>

   
    <header className="header-section">
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <img src="img/logo.png" alt=""/>
                </Link>
            </div>
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="./about-us.html">About</Link></li>
                        <li><Link to="./speaker.html">Speakers</Link>
                            <ul className="dropdown">
                                <li><Link to="#">Jayden</Link></li>
                                <li><Link to="#">Sara</Link></li>
                                <li><Link to="#">Emma</Link></li>
                                <li><Link to="#">Harriet</Link></li>
                            </ul>
                        </li>
                        <li><Link to="./schedule.html">Schedule</Link></li>
                        <li><Link to="./contact.html">Contacts</Link></li>
                        {!token ? (
                          <>
                          <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                          </>
                        ):(
                          <>
                           <li><Link to="/login" onClick={logouthandle}>Logout</Link></li>
                          </>
                        )}
                         
                       
                    </ul>
                </nav>
                <Link to="#" className="primary-btn top-btn"><i className="fa fa-ticket"></i> Ticket</Link>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
 
    </div>
  )
}

export default Nav
