import React, { useState } from 'react';
import './SignUpFormStepTwo.scss';

const SignUpFormStepTwo = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Date of Birth:', dob);
    console.log('Email:', email);

    // After submission, redirect to the homepage or call onBackToHome
    onBackToHome(); // This should only be called after completing this form
  };

  return (
    <div className="modal-overlay">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-icon">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dob">DOB</label>
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
          <button type="submit" className="submit-button">
            Go to Homepage
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormStepTwo;
