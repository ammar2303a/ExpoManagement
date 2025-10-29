import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useEffect } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'

function App() {

  function PrivateRoutes({children, adminOnly}){
    const token = localStorage.getItem('token')
    const isAdmin= localStorage.getItem('isAdmin') === "true"

    if(!token) return <Navigate to={"/login"}/>
    if(adminOnly && !isAdmin) return <Navigate to={"/"}/>

    return children;
  }
  return(
    <BrowserRouter>
  <Nav/>
<Routes>
  
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/admin' element={<PrivateRoutes adminOnly={true}><Dashboard/></PrivateRoutes>}/>
</Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
