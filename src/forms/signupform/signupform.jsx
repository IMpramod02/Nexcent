/* eslint-disable no-unused-vars */
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

//       const token = result.token;

//       navigate('/en/home/signup/step2', { state: { token } });
//     } catch (err) {
//       console.log('Error occurred:', err);
//       setErrorMessage('Username is already taken.');
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
import FaEye from '../../assets/icons/FaEye.png';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNextStep = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (!result.isSuccess) {
        setErrorMessage(result.message || 'Error during signup.');
        return;
      }

      // const { token, userId } = result;
      const token = result.token;
      const userId = result.userId;

      console.log('Token:', token);
      console.log('UserId:', userId);

      navigate('/en/home/signup/step2', { state: { token, userId } });
    } catch (err) {
      console.log('Error occurred:', err);
      setErrorMessage('An error occurred during signup.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleNextStep}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-icon">
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <img src={FaUser} alt="User Icon" className="icon" />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Create a Password</label>
            <div className="input-icon">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img src={FaEye} alt="Password Icon" className="icon" />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
