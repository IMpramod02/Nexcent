/* eslint-disable no-unused-vars */

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './SignUpForm.scss';
// import FaUser from '../../assets/icons/FaUser.png';

// const SignUpFormTwo = () => {
//   const [fullname, setFullname] = useState('');
//   const [dob, setDob] = useState('');
//   const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   // destrusture the location obj and pull the token from it
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     if (location.state && location.state.token) {
//       setToken(location.state.token);
//     } else {
//       setErrorMessage('Authentication token is missing. Please sign up again.');
//     }
//   }, [location.state]);

//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     if (!fullname || !dob || !email) {
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
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             fullname,
//             dob,
//             email,
//           }),
//         }
//       );

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

//           {/* Email Field */}
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

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './SignUpForm.scss';
// import FaUser from '../../assets/icons/FaUser.png';

// const SignUpFormTwo = () => {
//   const [fullname, setFullname] = useState('');
//   const [dob, setDob] = useState('');
//   const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [token, setToken] = useState('');
//   const [userId, setUserId] = useState('');
//   useEffect(() => {
//     console.log('Location state:', location.state);

//     if (location.state && location.state.token && location.state.userId) {
//       setToken(location.state.token);
//       setUserId(location.state.userId);
//     } else {
//       setErrorMessage(
//         'Authentication token or user ID is missing. Please sign up again.'
//       );
//     }
//   }, [location.state]);

//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     if (!fullname || !dob || !email) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/users/${userId}/`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           fullname,
//           dob,
//           email,
//         }),
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

//           {/* Email Field */}
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

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    console.log('Location state:', location.state);

    if (location.state) {
      setToken(location.state.token || '');
      setUserId(location.state.userId || '');
    }
  }, [location.state]);

  const handleNextStep = async (e) => {
    e.preventDefault();

    if (!fullname || !dob || !email) {
      setErrorMessage('Please fill out all fields.');
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
