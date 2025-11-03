import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home'
import { useEffect } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import UserLayout from './components/user/UserLayout'
import AdminLayout from './components/admin/AdminLayout'
import VenueAdd from './pages/admin/VenueAdd'

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
      </Routes>
      </AdminLayout>
    </PrivateRoutes>
  }/>
</Routes>
</BrowserRouter>

  )
}

export default App
