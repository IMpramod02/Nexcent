/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignUpForm.scss';
// import FaUser from '../../assets/icons/FaUser.png';

// const SignUpForm = () => {
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     if (!name || !dob || !email) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, dob, email }),
//       });

//       const result = await response.json();

//       if (!result.isSuccess) {
//         setErrorMessage('An error occurred. Please try again.');
//         return;
//       }

//       navigate('/homepage');
//     } catch (err) {
//       console.log('Error occurred:', err);
//       setErrorMessage('An error occurred during submission.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleNextStep}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <div className="input-icon">
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <img src={FaUser} alt="User Icon" className="icon" />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="dob">DOB</label>
//             <div className="input-icon">
//               <input
//                 type="date"
//                 id="dob"
//                 value={dob}
//                 onChange={(e) => setDob(e.target.value)}
//                 required
//               />
//               <img src={FaUser} alt="DOB Icon" className="icon" />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <div className="input-icon">
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {errorMessage && <p className="error-message">{errorMessage}</p>}

//           <button type="submit" className="submit-button">
//             Go to Homepage
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './SignUpForm.scss';
// import FaUser from '../../assets/icons/FaUser.png';

// const SignUpFormTwo = () => {
//   const [fullname, setFullname] = useState('');
//   const [dob, setDob] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Retrieve the token passed from the first page
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     // Access the token from the location state
//     if (location.state && location.state.token) {
//       setToken(location.state.token);
//     } else {
//       setErrorMessage('Authentication token is missing. Please sign up again.');
//     }
//   }, [location.state]);

//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     if (!fullname || !dob) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/users/345c9950-364f-446e-a792-c9ac7a0571e2/`,
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`, // Use the token from state
//           },
//           body: JSON.stringify({
//             fullname,
//             dob,
//           }),
//         }
//       );

//       const result = await response.json();

//       if (!result.isSuccess) {
//         setErrorMessage('An error occurred. Please try again.');
//         return;
//       }

//       // Navigate to the homepage on successful completion
//       navigate('/homepage');
//     } catch (err) {
//       console.log('Error occurred:', err);
//       setErrorMessage('An error occurred during submission.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         <h2>Sign-Up</h2>
//         <form onSubmit={handleNextStep}>
//           {/* Full Name Field */}
//           <div className="form-group">
//             <label htmlFor="fullname">Full Name</label>
//             <div className="input-icon">
//               <input
//                 type="text"
//                 id="fullname"
//                 placeholder="Enter your full name"
//                 value={fullname}
//                 onChange={(e) => setFullname(e.target.value)}
//                 required
//               />
//               <img src={FaUser} alt="Icon" className="icon" />
//             </div>
//           </div>

//           {/* DOB Field */}
//           <div className="form-group">
//             <label htmlFor="dob">Date of Birth</label>
//             <div className="input-icon">
//               <input
//                 type="date"
//                 id="dob"
//                 value={dob}
//                 onChange={(e) => setDob(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Error Message */}
//           {errorMessage && <p className="error-message">{errorMessage}</p>}

//           {/* Submit Button */}
//           <button type="submit" className="submit-button">
//             Go to Homepage
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpFormTwo;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignUpForm.scss';
import FaUser from '../../assets/icons/FaUser.png';

const SignUpFormTwo = () => {
  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  // destrusture the location obj and pull the token from it
  const [token, setToken] = useState('');

  useEffect(() => {
    if (location.state && location.state.token) {
      setToken(location.state.token);
    } else {
      setErrorMessage('Authentication token is missing. Please sign up again.');
    }
  }, [location.state]);

  const handleNextStep = async (e) => {
    e.preventDefault();

    if (!fullname || !dob || !email) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/users/345c9950-364f-446e-a792-c9ac7a0571e2/`,
        {
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
        }
      );

      const result = await response.json();

      if (!result.isSuccess) {
        setErrorMessage('An error occurred. Please try again.');
        return;
      }

      navigate('/homepage');
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
