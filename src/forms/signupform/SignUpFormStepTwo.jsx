/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import './SignUpFormStepTwo.scss';

// const SignUpFormStepTwo = ({ onBackToHome }) => {
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Name:', name);
//     console.log('Date of Birth:', dob);
//     console.log('Email:', email);

//     // After submission, redirect to the homepage or call onBackToHome
//     onBackToHome(); // This should only be called after completing this form
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
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
//           <button type="submit" className="submit-button">
//             Go to Homepage
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpFormStepTwo;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignUpFormStepTwo.scss';

// const SignUpFormStepTwo = () => {
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [email, setEmail] = useState('');

//   const navigate = useNavigate(); // Use react-router-dom's useNavigate hook to handle redirection

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Name:', name);
//     console.log('Date of Birth:', dob);
//     console.log('Email:', email);

//     // Redirect to homepage after submission
//     navigate('/en/home'); // Redirect to the home page after successful submission
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         <h2>Step 2: Additional Information</h2>
//         <form onSubmit={handleSubmit}>
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
//             </div>
//           </div>

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

//           <button type="submit" className="submit-button">
//             Complete Sign Up and Go to Homepage
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpFormStepTwo;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignUpForm.scss';
// import FaUser from '../../assets/icons/FaUser.png';
// import FaEye from '../../assets/icons/FaEye.png';

// const SignUpForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const result = await response.json();

//       if (!result.isSuccess) {
//         if (result.message === 'Username is already taken') {
//           setErrorMessage('Username is already taken.');
//         } else {
//           setErrorMessage('Username is already taken.');
//         }
//         return;
//       }

//       navigate('/signup/step2');
//     } catch (err) {
//       console.log('Error occurred:', err);
//       setErrorMessage('An error occurred during registration.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleNextStep}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <div className="input-icon">
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <img src={FaUser} alt="User Icon" className="icon" />
//             </div>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Create a Password</label>
//             <div className="input-icon">
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <img src={FaEye} alt="Password Icon" className="icon" />
//             </div>
//           </div>

//           <button type="submit" className="submit-button">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.scss';
import FaUser from '../../assets/icons/FaUser.png';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNextStep = async (e) => {
    e.preventDefault();

    if (!name || !dob || !email) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, dob, email }),
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
        <h2>Sign Up</h2>
        <form onSubmit={handleNextStep}>
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
              <img src={FaUser} alt="User Icon" className="icon" />
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
              <img src={FaUser} alt="DOB Icon" className="icon" />
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

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="submit-button">
            Go to Homepage
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
