import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {
const [email, setEmail] = useState('');
const [password, setPass] = useState('');

const navigate = useNavigate();
const loginsubmit = async (e) =>{
    e.preventDefault();

try {
      const res =   await axios.post("http://localhost:5000/api/auth/login", {email, password})
    localStorage.setItem('token', res.data.token )
    alert("Login Successfull")
    navigate("/")
} catch (error) {
    alert("Login Failed")
}
}
  return (
    <div>
          <section className="contact-section spad">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="section-title text-center mb-4">
          <h2>Login</h2>
          <p>Join our event by creating your account below</p>
        </div>

        <form className="contact-form" onSubmit={loginsubmit} >
          <div className="form-group">
            <input type="email" className="form-control"value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" value={password} onChange={(e) => setPass(e.target.value)} placeholder="Password" required />
          </div>
          {/* <div className="form-group">
            <select className="form-control disabled ">
              <option value="">Select Role</option>
              <option value="attendee">Attendee</option>
              <option value="exhibitor">Exhibitor</option>
            </select>
          </div> */}
          <button type="submit" className="site-btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login
