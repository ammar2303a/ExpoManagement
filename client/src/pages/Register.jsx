import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Register() {
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    // console.log(name);
    const navigate = useNavigate();

    const handlesubmit= async (e) =>{
        e.preventDefault();
        try {
          await  axios.post("http://localhost:5000/api/auth/register", {name,email, password})
            alert("User Register")
            navigate("/login")
        } catch (error) {
            alert("Registration Falied")
            
        }
    }
    


  return (
    <div>
      <section className="contact-section spad">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="section-title text-center mb-4">
          <h2>Register Now</h2>
          <p>Join our event by creating your account below</p>
        </div>

        <form className="contact-form" onSubmit={handlesubmit} >
          <div className="form-group">
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
          </div>
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
          <button type="submit" className="site-btn">Register</button>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Register
