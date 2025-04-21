import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [applicationForm, setApplicationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null
  });
  const [message, setMessage] = useState('');

  const jobs = [
    {
      id: 1,
      position: 'Frontend Developer',
      company: 'Technologies- Krithika & Co',
      location: 'New York, NY',
      salaryRange: '$80k'
    },
    {
      id: 2,
      position: 'UX Designer',
      company: 'TCS Companies Association with Krithika & Co',
      location: 'San Francisco, CA',
      salaryRange: '$75k'
    },
    {
      id: 3,
      position: 'Full Stack Developer',
      company: 'Ravishankar Legacy Companies',
      location: 'Chennai, TN',
      salaryRange: '$90k'
    }
  ];

  const applications = [
    {
      id: 1,
      position: 'Frontend Developer',
      company: 'Technologies- Krithika & Co',
      appliedDate: '2025-04-20',
      status: 'Under Review'
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Ravishankar Legacy Companies',
      appliedDate: '2025-04-19',
      status: 'Interview Scheduled'
    }
  ];

  const handleNavigation = (pageName) => {
    setPage(pageName);
    setMessage('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setMessage('Login successful!');
      setPage('jobs');
    } else {
      setMessage('fill in all fields!');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerForm.firstName && registerForm.lastName && registerForm.email &&
      registerForm.phone && registerForm.password) {
      setMessage('Registration successful! you can log in now.');
      setPage('login');
    } else {
      setMessage(' fill in all fields!');
    }
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setPage('apply');
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    if (applicationForm.firstName && applicationForm.lastName &&
      applicationForm.email && applicationForm.phone && applicationForm.resume) {
      setMessage('Application submitted successfully!');
    } else {
      setMessage(' fill in all fields!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('home');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#" onClick={() => handleNavigation('home')}>kikaportals</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavigation('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavigation('jobs')}>Jobs</a>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleNavigation('my-applications')}>My Applications</a>
                </li>
              )}
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleNavigation('login')}>Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleNavigation('register')}>Register</a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">
        <div className="container py-4">
          {message && (
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              {message}
              <button type="button" className="btn-close" onClick={() => setMessage('')}></button>
            </div>
          )}

          {/* Home Page */}
          {page === 'home' && (
            <div className="bg-primary text-white p-5 mb-4 rounded">
              <div className="container-fluid py-5 text-center">
              <img src="https://www.cielhr.com/wp-content/uploads/2024/12/Job-Hunting-Strategies-for-Job-Seekers.png" alt="headerimg" className="img-fluid mb-4" />
                <h1 className="display-5 fw-bold">Find Your Dream Job!</h1>
                <p className="lead mb-4">Start your career journey with the best companies.</p>
                <button className="btn btn-light btn-lg mt-3" onClick={() => handleNavigation('jobs')}>
                  Browse Jobs
                </button>
              </div>
            </div>
            
            
          )}

         


          {/* Jobs Page */}
          {page === 'jobs' && (
            <div>
              <h1 className="text-center mb-4">Available Jobs</h1>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {jobs.map(job => (
                  <div key={job.id} className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title text-primary">{job.position}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                        <p className="card-text">{job.location}</p>
                        <p className="card-text">{job.salaryRange}</p>
                      </div>
                      <div className="card-footer bg-transparent border-top-0">
                        <button className="btn btn-primary w-100" onClick={() => handleApply(job)}>
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          )}



          {/* Apply Page */}
          {page === 'apply' && selectedJob && (
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Apply for: {selectedJob.position}</h2>
                <h5 className="text-center text-muted mb-4">{selectedJob.company}</h5>
                
                <form onSubmit={handleApplicationSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="firstName"
                        value={applicationForm.firstName}
                        onChange={(e) => setApplicationForm({...applicationForm, firstName: e.target.value})}
                        required pattern='[A-Za-z]{2,}'
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="lastName"
                        value={applicationForm.lastName}
                        onChange={(e) => setApplicationForm({...applicationForm, lastName: e.target.value})}
                        required pattern='[A-Za-z]{2,}'
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        required pattern='/^[^\s@]+@[^\s@]+\.[^\s@]+$/'
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                        required pattern = '^(9|8)[0-9]{9}$'
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="resume" className="form-label">Resume</label>
                      <input 
                        type="file" 
                        className="form-control" 
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setApplicationForm({...applicationForm, resume: e.target.files[0]})}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-primary w-100">Submit Application</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* My Applications Page */}
          {page === 'my-applications' && (
            <div>
              <h1 className="text-center mb-4">My Applications</h1>
              {applications.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Position</th>
                        <th>Company</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map(app => (
                        <tr key={app.id}>
                          <td>{app.position}</td>
                          <td>{app.company}</td>
                          <td>{app.appliedDate}</td>
                          <td>
                            <span className={`badge ${
                              app.status === 'Under Review' ? 'bg-warning' :
                              app.status === 'Interview Scheduled' ? 'bg-success' :
                              app.status === 'Rejected' ? 'bg-danger' : 'bg-secondary'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center">No applications submitted yet.</p>
              )}
            </div>
          )}

          {/* Login Page */}
          {page === 'login' && (
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-5">
                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="loginEmail"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="loginPassword"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <p className="text-center mt-3">
                      Don't have an account? 
                      <a href="#" className="ms-1" onClick={() => handleNavigation('register')}>Register</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Register Page */}
          {page === 'register' && (
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    <h2 className="card-title text-center mb-4">Register</h2>
                    <form onSubmit={handleRegister}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="regFirstName" className="form-label">First Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="regFirstName"
                            value={registerForm.firstName}
                            onChange={(e) => setRegisterForm({...registerForm, firstName: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="regLastName" className="form-label">Last Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="regLastName"
                            value={registerForm.lastName}
                            onChange={(e) => setRegisterForm({...registerForm, lastName: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="regEmail" className="form-label">Email</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            id="regEmail"
                            value={registerForm.email}
                            onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="regPhone" className="form-label">Phone</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="regPhone"
                            value={registerForm.phone}
                            onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="regPassword" className="form-label">Password</label>
                          <input 
                            type="password" 
                            className="form-control" 
                            id="regPassword"
                            value={registerForm.password}
                            onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary w-100">Register</button>
                        </div>
                      </div>
                    </form>
                    <p className="text-center mt-3">
                      Already have an account? 
                      <a href="#" className="ms-1" onClick={() => handleNavigation('login')}>Login</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-dark text-white mt-5 py-4">
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <h5>Useful Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Careers</a></li>
                        <li><a href="#" className="text-white">FAQs</a></li>
                        <li><a href="#" className="text-white">Contact Us</a></li>
                        <li><a href="#" className="text-white">Privacy Policy</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <h5>Follow Us</h5>
                      <div>
                        <a href="#" className="text-white mx-2">Facebook</a>
                        <a href="#" className="text-white mx-2">LinkedIn</a>
                        <a href="#" className="text-white mx-2">Inatagram</a>
                        <a href="#" className="text-white mx-2">Youtube</a>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">© 2025 Kikaportals, All Rights Reserved.</p>
                </div>
              </footer>
    </div>
    
  );
}

export default App;
