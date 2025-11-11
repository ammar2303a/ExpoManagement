import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home'
import { useEffect } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import UserLayout from './components/user/UserLayout'
import AdminLayout from './components/admin/AdminLayout'
import VenueAdd from './pages/admin/VenueAdd'
import SpeakerAdd from './pages/admin/SpeakerAdd'
import ScheduleAdd from './pages/admin/ScheduleAdd'
import TicketsAdd from './pages/admin/TicketsAdd'
import EventAdd from './pages/admin/EventAdd'
import SponsorsAdd from './pages/admin/SponsorsAdd'
import EventTicket from './pages/EventTicket'

function App() {

  function PrivateRoutes({children, adminOnly}){
    const token = localStorage.getItem('token')
    const isAdmin= localStorage.getItem('isAdmin') === "true"

    if(!token) return <Navigate to={"/login"}/>
    if(adminOnly && !isAdmin) return <Navigate to={"/"}/>

    return children;
  }
  return(

//     <BrowserRouter>
//   <Nav/>
// <Routes>
  
//   <Route path='/' element={<Home/>}/>
//   <Route path='/register' element={<Register/>}/>
//   <Route path='/login' element={<Login/>}/>
//   <Route path='/admin' element={<PrivateRoutes adminOnly={true}><Dashboard/></PrivateRoutes>}/>
// </Routes>
//   <Footer/>
//   </BrowserRouter>
<BrowserRouter>
<Routes>
  <Route path='/showticket' element={<EventTicket/>}/>
  <Route path='/*' element={
    <UserLayout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </UserLayout>
  }/>

  <Route path='/admin/*' element={
    <PrivateRoutes adminOnly={true}>
     <AdminLayout>
       <Routes>
        <Route path='' element={<Dashboard/>}/>
        <Route path='/venue' element={<VenueAdd/>}/>
        <Route path='/speaker' element={<SpeakerAdd/>}/>
         <Route path='/shedule' element={<ScheduleAdd/>}/>
         <Route path='/ticket' element={<TicketsAdd/>}/>
        <Route path='/event' element={<EventAdd/>}/>
         <Route path='/sponsors' element={<SponsorsAdd/>}/>
      </Routes>
      </AdminLayout>
    </PrivateRoutes>
  }/>
</Routes>
</BrowserRouter>

  )
}

export default App
