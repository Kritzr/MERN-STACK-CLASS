import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [jobApplication, setJobApplication] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(loginEmail) || loginPassword.length < 6) {
      setErrorMessage('Please enter a valid email and password (min 6 characters).');
      return;
    }
    setErrorMessage('');
    alert('Login Successful');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (
      !emailRegex.test(registerEmail) ||
      !phoneRegex.test(registerPhone) ||
      registerPassword.length < 6
    ) {
      setErrorMessage('Please check your input fields.');
      return;
    }
    setErrorMessage('');
    alert('Registration Successful');
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    if (!jobApplication.firstName || !jobApplication.lastName || !jobApplication.email || !jobApplication.phone) {
      setErrorMessage('All fields must be filled in.');
      return;
    }
    setErrorMessage('');
    alert('Application Submitted');
  };

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Job Portal</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#jobs">Jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#apply">Apply</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myapplications">My Applications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#register">Register</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero bg-primary text-white text-center py-5">
        <h1>Find your dream job today</h1>
        <button className="btn btn-light">Browse Jobs</button>
      </section>

      {/* Login / Signup Section */}
      <section id="login" className="py-5">
        <div className="row">
          {/* Login Form */}
          <div className="col-md-6 mx-auto">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>

          {/* Register Form */}
          <div className="col-md-6 mx-auto">
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="registerFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="registerFirstName"
                  value={registerFirstName}
                  onChange={(e) => setRegisterFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="registerLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="registerLastName"
                  value={registerLastName}
                  onChange={(e) => setRegisterLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="registerEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="registerEmail"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="registerPhone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="registerPhone"
                  value={registerPhone}
                  onChange={(e) => setRegisterPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="registerPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="registerPassword"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-5">
        <h2>Job Positions</h2>
        <div className="row">
          {/* Sample Job Card */}
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Job" />
              <div className="card-body">
                <h5 className="card-title">Software Engineer</h5>
                <p className="card-text">Company: XYZ Corp.</p>
                <p className="card-text">Location: Remote</p>
                <p className="card-text">Salary: $80,000 - $100,000</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-5">
        <h2>Apply for Job</h2>
        <form onSubmit={handleApplicationSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={jobApplication.firstName}
              onChange={(e) => setJobApplication({ ...jobApplication, firstName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={jobApplication.lastName}
              onChange={(e) => setJobApplication({ ...jobApplication, lastName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={jobApplication.email}
              onChange={(e) => setJobApplication({ ...jobApplication, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={jobApplication.phone}
              onChange={(e) => setJobApplication({ ...jobApplication, phone: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume</label>
            <input
              type="file"
              className="form-control"
              id="resume"
              onChange={(e) => setJobApplication({ ...jobApplication, resume: e.target.files[0] })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Application</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <ul className="list-unstyled">
          <li><a href="#careers" className="text-white">Careers</a></li>
          <li><a href="#faqs" className="text-white">FAQs</a></li>
          <li><a href="#contactus" className="text-white">Contact Us</a></li>
          <li><a href="#privacypolicy" className="text-white">Privacy Policy</a></li>
        </ul>
        <div>
          <a href="#" className="text-white mx-2">Facebook</a>
          <a href="#" className="text-white mx-2">Twitter</a>
          <a href="#" className="text-white mx-2">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
