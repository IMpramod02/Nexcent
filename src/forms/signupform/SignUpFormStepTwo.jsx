/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignUpForm.scss';
import FaUser from '../../assets/icons/FaUser.png';

const SignUpFormTwo = () => {
  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (!storedToken || !storedUserId) {
      if (location.state?.token && location.state?.userId) {
        localStorage.setItem('token', location.state.token);
        localStorage.setItem('userId', location.state.userId);
      } else {
        navigate('/en/home/signup');
        return;
      }
    }
  }, [location.state, navigate]);

  const handleNextStep = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!fullname || !dob || !email) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token || !userId) {
      setErrorMessage('Session expired. Please log in again.');
      navigate('/en/home/signup');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/users/${userId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullname,
          dob,
          email,
        }),
      });

      const result = await response.json();
      console.log('API response:', result);

      if (
        result &&
        result.fullname === fullname &&
        result.email === email &&
        result.dob === dob
      ) {
        console.log('Signup successful, navigating to dashboard...');
        navigate('/en/dashboard');
      } else {
        setErrorMessage('Signup unsuccessful. Please try again.');
      }
    } catch (err) {
      console.log('Error occurred:', err);
      setErrorMessage('An error occurred during submission.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="signup-form">
        <h2>Sign-Up</h2>
        <form onSubmit={handleNextStep}>
          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <div className="input-icon">
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <img src={FaUser} alt="Icon" className="icon" />
            </div>
          </div>

          {/* DOB Field */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <div className="input-icon">
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Go to Homepage
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormTwo;
