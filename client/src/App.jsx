import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useEffect } from 'react'
function App() {
  return(
    <BrowserRouter>
  <Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
