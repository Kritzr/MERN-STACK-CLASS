import { useState } from 'react';
import './App.css';

function App() {
  // we are initialising the component's usestate->usestate hook from react is imported
  //we call the use state t0 create the state variable i.e. formData with its setter function called setFormData
  //we update the state of the object when the users input is given. each of th e fields would be connected to this state through controlled components where the input values come from the state and changes update the state

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    dob: '',
    paymentMode: ''
  });

  // Error state of the usestate hook:
  //initialised with empty object and setErrors is its setter function
  // this is to track the erro messages so when we get error, this will be populated
  const [errors, setErrors] = useState({});
  
  // Success state of the usestate hook:
  //isSubmitted initialised as a boolean variable with false, and its corresponding setter function
  //when this becomes true, the page will display the success message

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handles the input changes
  //defines a function that takes an event object that is (e) as its parameter
  //this event object is automatically provided by react when an input field is changed
  
  const handleChange = (e) => {
    const { name, value } = e.target;//this uses destructiong to extract two properties from the event target that is the name and the value
    //updates the form state by using the spread operator: to copy all existing form values, using [name] (computed property syntax) to dynamically set the property that matches the ip name
    // and setting that property to the new value from the input
    setFormData({
      ...formData,
      [name]: value
    });
    
    // clears error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form data
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      tempErrors.firstName = "First name should contain only letters";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      tempErrors.lastName = "Last name should contain only letters";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Indian Phone number validation (10 digits starting with 6, 7, 8, or 9)
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid Indian phone number (10 digits)";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(formData.password)) {
      tempErrors.password = "Password must include uppercase, lowercase, number and special character";
      isValid = false;
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Age validation
    if (!formData.age) {
      tempErrors.age = "Age is required";
      isValid = false;
    } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
      tempErrors.age = "Please enter a valid age (1-120)";
      isValid = false;
    }

    // Gender validation
    if (!formData.gender) {
      tempErrors.gender = "Please select a gender";
      isValid = false;
    }

    // Date of Birth validation
    if (!formData.dob) {
      tempErrors.dob = "Date of birth is required";
      isValid = false;
    } else {
      const today = new Date();
      const birthDate = new Date(formData.dob);
      if (birthDate > today) {
        tempErrors.dob = "Date of birth cannot be in the future";
        isValid = false;
      }
    }

    // Payment mode validation
    if (!formData.paymentMode) {
      tempErrors.paymentMode = "Please select a payment mode";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      setIsSubmitted(true);
    } else {
      console.log("Form has errors");
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      age: '',
      gender: '',
      dob: '',
      paymentMode: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      
      {isSubmitted ? (
        <div className="success-message">
          <h2>Registration Successful!</h2>
          <p>Thank you for registering, {formData.firstName}!</p>
          <button className="reset-btn" onClick={handleReset}>Register Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "error-input" : ""}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>
              
              <div className="form-field">
                <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "error-input" : ""}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </div>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit Indian mobile number"
              className={errors.phone ? "error-input" : ""}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="password">Password <span className="required">*</span></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error-input" : ""}
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              
              <div className="form-field">
                <label htmlFor="confirmPassword">Confirm Password <span className="required">*</span></label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? "error-input" : ""}
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="age">Age <span className="required">*</span></label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="1"
                  max="120"
                  className={errors.age ? "error-input" : ""}
                />
                {errors.age && <span className="error">{errors.age}</span>}
              </div>
              
              <div className="form-field">
                <label htmlFor="gender">Gender <span className="required">*</span></label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={errors.gender ? "error-input" : ""}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                {errors.gender && <span className="error">{errors.gender}</span>}
              </div>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="dob">Date of Birth <span className="required">*</span></label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={errors.dob ? "error-input" : ""}
            />
            {errors.dob && <span className="error">{errors.dob}</span>}
          </div>

          <div className="form-field">
            <label>Mode of Payment <span className="required">*</span></label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="credit"
                  name="paymentMode"
                  value="credit"
                  checked={formData.paymentMode === "credit"}
                  onChange={handleChange}
                />
                <label htmlFor="credit">Credit Card</label>
              </div>
              
              <div className="radio-option">
                <input
                  type="radio"
                  id="debit"
                  name="paymentMode"
                  value="debit"
                  checked={formData.paymentMode === "debit"}
                  onChange={handleChange}
                />
                <label htmlFor="debit">Debit Card</label>
              </div>
              
              <div className="radio-option">
                <input
                  type="radio"
                  id="upi"
                  name="paymentMode"
                  value="upi"
                  checked={formData.paymentMode === "upi"}
                  onChange={handleChange}
                />
                <label htmlFor="upi">UPI</label>
              </div>
              
              <div className="radio-option">
                <input
                  type="radio"
                  id="netbanking"
                  name="paymentMode"
                  value="netbanking"
                  checked={formData.paymentMode === "netbanking"}
                  onChange={handleChange}
                />
                <label htmlFor="netbanking">Net Banking</label>
              </div>
            </div>
            {errors.paymentMode && <span className="error">{errors.paymentMode}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;