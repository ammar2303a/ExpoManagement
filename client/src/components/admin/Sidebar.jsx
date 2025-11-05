import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
    
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            
            <hr className="sidebar-divider my-0"/>

            
            <li className="nav-item active">
                <Link className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

         
            <hr className="sidebar-divider"/>

           
            <div className="sidebar-heading">
                Interface
            </div>            
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" >
                    <span>Events</span>
                </Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/speaker" >
                    <span>Speakers</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" >
                    <span>Schedule</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" >
                    <span>Tickets</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/venue" >
                    <span>Venues</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" >
                    <span>Sponsors</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" >
                    <span>Gallery</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" >
                    <span>Users</span>
                </Link>
            </li>

            
            <hr className="sidebar-divider"/>

            
            

          

           
            <hr className="sidebar-divider d-none d-md-block"/>

            
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="admin/img/undraw_rocket.svg" alt="..."/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <Link className="btn btn-success btn-sm" to="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</Link>
            </div>

        </ul>
        
    </div>
  )
}

export default Sidebar
