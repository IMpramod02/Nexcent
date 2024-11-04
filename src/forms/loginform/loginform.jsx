/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import './LoginForm.scss';
// import FaEnvelope from '../../assets/icons/FaEye.png';
// import FaEye from '../../assets/icons/FaUser.png';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }
//   };

//   return (
//     <div className="login-form-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <div className="input-icon">
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <img src={FaEnvelope} alt="Email Icon" className="icon" />
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div className="input-icon">
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <img src={FaEye} alt="Password Icon" className="icon" />
//           </div>
//         </div>

//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <button type="submit" className="submit-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// import React, { useState } from 'react';
// import './LoginForm.scss';
// import FaEnvelope from '../../assets/icons/FaEye.png';
// import FaEye from '../../assets/icons/FaUser.png';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setErrorMessage('');
//     setSuccessMessage('');

//     if (!email || !password) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccessMessage('Login successful!');
//         console.log(data.token);
//       } else {
//         setErrorMessage(data.message || 'Login failed.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-form-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <div className="input-icon">
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <img src={FaEnvelope} alt="Email Icon" className="icon" />
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div className="input-icon">
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <img src={FaEye} alt="Password Icon" className="icon" />
//           </div>
//         </div>

//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}

//         <button type="submit" className="submit-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import './LoginForm.scss';
import FaEnvelope from '../../assets/icons/FaEye.png';
import FaEye from '../../assets/icons/FaUser.png';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!username || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Login successful!');
        console.log(data.token);
      } else {
        setErrorMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <div className="input-icon">
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <img src={FaEnvelope} alt="Username Icon" className="icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-icon">
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img src={FaEye} alt="Password Icon" className="icon" />
          </div>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
