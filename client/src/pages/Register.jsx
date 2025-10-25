import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom"


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(name);

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", {name,email,password});
        alert("Registration Succesfull")
        navigate("/login")
        } catch (error) {
            alert("Registration falied")
            
        }

    }

    return (
        <>
             <main className="main-wrapper">
      <section
        className="cta-section py-5 text-light"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #343a40 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container text-center mt-5">
          <h2 className="heading mb-4 text-white">Create Your Account</h2>
          <p className="intro mb-5 text-white-50">
            Register now to join the conference and stay updated.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div
                className="card shadow-lg p-4 border-0 rounded-4"
                style={{
                  backgroundColor: "#3e5c7aff",
                  color: "#fff",
                }}
              >
                <form onSubmit={handlesubmit}>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-bold text-light">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-0" value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label className="form-label fw-bold text-light">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control bg-dark text-light border-0" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-4 text-start">
                    <label className="form-label fw-bold text-light">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control bg-dark text-light border-0" value={password} onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>

                  <p className="mt-3 mb-0 text-center text-white-50">
                    Already have an account?{" "}
                    <a href="/login" className="text-decoration-none text-info">
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
        </>
    )
}

export default Register
