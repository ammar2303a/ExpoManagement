import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useEffect } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return(
    <BrowserRouter>
  <Nav/>
<Routes>
  
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
