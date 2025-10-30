import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const AdminLayout = ({children}) => {
  return (
    <div id='page-top'>
        <div id='wrapper' >
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">            
            <div id="content">
    <Navbar/>
    {children}
    </div>
    </div>
    </div>
    </div>
  )
}

export default AdminLayout
