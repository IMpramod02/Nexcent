/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import './SignUpForm.scss';

// const SignUpForm = ({ onClose }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // Close the form after submitting (you can handle more logic here, like validation)
//     onClose();
//   };

//   return (
//     <div className="signup-form-container">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Create Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button">
//             Register
//           </button>
//         </form>
//         <button className="close-button" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState } from 'react';
// import './SignUpForm.scss';
// import SignUpFormStepTwo from './SignUpFormStepTwo'; // Import the second form

// const SignUpForm = ({ onClose }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [step, setStep] = useState(1); // Track which step the user is on

//   // Move to the next step (Step 2)
//   const handleNextStep = (e) => {
//     e.preventDefault();
//     console.log('Username:', username);
//     console.log('Password:', password);
//     setStep(2); // Go to the second step
//   };

//   // Handle the final submission and redirect to the homepage
//   const handleBackToHome = () => {
//     onClose(); // This can close the modal or redirect the user to the homepage
//   };

//   return (
//     <div className="signup-form-container">
//       <div className="signup-form">
//         {/* Render Step 1 or Step 2 based on the current step */}
//         {step === 1 ? (
//           <>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleNextStep}>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   type="text"
//                   id="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Create Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" className="submit-button">
//                 Register
//               </button>
//             </form>
//           </>
//         ) : (
//           <SignUpFormStepTwo onBackToHome={handleBackToHome} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState } from 'react';
// import './SignUpForm.scss';
// import SignUpFormStepTwo from './SignUpFormStepTwo'; // Import the second form

// const SignUpForm = ({ onClose }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [step, setStep] = useState(1); // Track which step the user is on
//   const [errorMessage, setErrorMessage] = useState(''); // For showing validation errors

//   // Move to the next step (Step 2)
//   const handleNextStep = (e) => {
//     e.preventDefault();

//     // Basic validation for the first step
//     if (!username || !password) {
//       setErrorMessage('Please fill out both the username and password fields.');
//       return; // Prevent moving to the next step if fields are empty
//     }

//     // Clear the error message and move to Step 2
//     setErrorMessage('');
//     setStep(2); // Go to the second step
//   };

//   // Handle the final submission and redirect to the homepage
//   const handleBackToHome = () => {
//     onClose(); // Only close when you call this, keeping the form open until then
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         {/* Only render Step 2 if step is 2, otherwise render Step 1 */}
//         {step === 1 ? (
//           <>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleNextStep}>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   type="text"
//                   id="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Create Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Error message */}
//               {errorMessage && <p className="error-message">{errorMessage}</p>}

//               <button type="submit" className="submit-button">
//                 Register
//               </button>
//             </form>
//           </>
//         ) : (
//           <SignUpFormStepTwo onBackToHome={handleBackToHome} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState } from 'react';
// import './SignUpForm.scss';
// import SignUpFormStepTwo from './SignUpFormStepTwo'; // Import the second form
// import FaUser from '../../assets/icons/FaEye.png'; // Import the FaUser icon
// import FaEye from '../../assets/icons/FaUser.png'; // Import the FaEye icon

// const SignUpForm = ({ onClose }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [step, setStep] = useState(1); // Track which step the user is on
//   const [errorMessage, setErrorMessage] = useState(''); // For showing validation errors

//   // Move to the next step (Step 2)
//   const handleNextStep = (e) => {
//     e.preventDefault(); // Prevent page refresh or form submission

//     // Basic validation for the first step
//     if (!username || !password) {
//       setErrorMessage('Please fill out both the username and password fields.');
//       return; // Prevent moving to the next step if fields are empty
//     }

//     // Clear the error message and move to Step 2
//     setErrorMessage('');
//     setStep(2); // Go to the second step
//   };

//   // Handle the final submission and redirect to the homepage
//   const handleBackToHome = () => {
//     onClose(); // This closes the modal (use this only after the second form completes)
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         {/* Render Step 1 or Step 2 based on the current step */}
//         {step === 1 ? (
//           <>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleNextStep}>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <div className="input-icon">
//                   <input
//                     type="text"
//                     id="username"
//                     placeholder="Enter your username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                   <img src={FaUser} alt="User Icon" className="icon" />{' '}
//                   {/* User icon */}
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Create a Password</label>
//                 <div className="input-icon">
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   {/*<img src={FaEye} alt="Eye Icon" className="icon" />{' '} */}
//                   {/* Password visibility icon */}
//                 </div>
//               </div>

//               {/* Error message */}
//               {errorMessage && <p className="error-message">{errorMessage}</p>}

//               <button type="submit" className="submit-button">
//                 Register
//               </button>
//             </form>
//           </>
//         ) : (
//           <SignUpFormStepTwo onBackToHome={handleBackToHome} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState } from 'react';
// import './SignUpForm.scss';
// import SignUpFormStepTwo from './SignUpFormStepTwo'; // Import the second form
// import FaUser from '../../assets/icons/FaUser.png'; // Update to correct icon for user
// import FaEye from '../../assets/icons/FaEye.png'; // Update to correct icon for password visibility

// const SignUpForm = ({ onClose }) => {
//   //const [fullname, setFullname] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [step, setStep] = useState(1); // Track the step of the form
//   const [errorMessage, setErrorMessage] = useState(''); // Validation error message

//   // Function to handle form submission
//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     // Validate fields
//     if (!username || !password) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     // Call the API to register the user
//     try {
//       const response = await fetch('/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const result = await response.json();

//       if (!result.isSuccess) {
//         if (result.message === 'Username is already taken') {
//           setErrorMessage('Username is taken');
//         } else {
//           setErrorMessage('User name is already taken.');
//         }
//         return;
//       }

//       // Move to the next step if registration is successful
//       setStep(2);
//     } catch (error) {
//       setErrorMessage('User name is alrteady taken.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         {step === 1 ? (
//           <>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleNextStep}>
//               <div className="form-group">
//                 {/* <label htmlFor="fullname">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullname"
//                   placeholder="Enter your full name"
//                   value={fullname}
//                   onChange={(e) => setFullname(e.target.value)}
//                   required
//                 /> */}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <div className="input-icon">
//                   <input
//                     type="text"
//                     id="username"
//                     placeholder="Enter your username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                   <img src={FaUser} alt="User Icon" className="icon" />
//                 </div>
//                 {errorMessage && (
//                   <p className="error-message">{errorMessage}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Create a Password</label>
//                 <div className="input-icon">
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <img src={FaEye} alt="Password Icon" className="icon" />
//                 </div>
//               </div>

//               <button type="submit" className="submit-button">
//                 Register
//               </button>
//             </form>
//           </>
//         ) : (
//           <SignUpFormStepTwo onBackToHome={onClose} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState } from 'react';
// import './SignUpForm.scss';
// import SignUpFormStepTwo from './SignUpFormStepTwo'; // Import the second form
// import FaUser from '../../assets/icons/FaUser.png'; // Update to correct icon for user
// import FaEye from '../../assets/icons/FaEye.png'; // Update to correct icon for password visibility

// const SignUpForm = ({ onClose }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [step, setStep] = useState(1); // Track the step of the form
//   const [errorMessage, setErrorMessage] = useState(''); // Validation error message

//   // Function to handle form submission
//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     // Validate fields
//     if (!username || !password) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     // Call the API to register the user
//     try {
//       console.log('Sending request to /register with username and password:', {
//         username,
//         password,
//       });

//       const response = await fetch('http://localhost:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       // Log the raw response to inspect it
//       console.log('Raw API Response:', response);

//       const result = await response.json();

//       // Log the parsed result from the response
//       console.log('Parsed API Response:', result);

//       // Check if the API response indicates success or error
//       if (!result.isSuccess) {
//         if (result.message === 'Username is already taken') {
//           setErrorMessage('Username is already taken.');
//         } else {
//           setErrorMessage('An error occurred during registration.');
//         }
//         return;
//       }

//       // Move to the next step if registration is successful
//       setStep(2);
//     } catch (err) {
//       // Log any errors during the request
//       console.log('Error occurred:', err);

//       // Handle any network or unexpected errors
//       setErrorMessage('User name is already taken.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-form">
//         {step === 1 ? (
//           <>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleNextStep}>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <div className="input-icon">
//                   <input
//                     type="text"
//                     id="username"
//                     placeholder="Enter your username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                   <img src={FaUser} alt="User Icon" className="icon" />
//                 </div>
//                 {errorMessage && (
//                   <p className="error-message">{errorMessage}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Create a Password</label>
//                 <div className="input-icon">
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <img src={FaEye} alt="Password Icon" className="icon" />
//                 </div>
//               </div>

//               <button type="submit" className="submit-button">
//                 Register
//               </button>
//             </form>
//           </>
//         ) : (
//           <SignUpFormStepTwo onBackToHome={onClose} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FaUser from '../../assets/icons/FaUser.png'; // User Icon
// import FaEye from '../../assets/icons/FaEye.png'; // Eye Icon for password
// import './SignUpForm.scss';

// const SignUpStepOne = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   // Function to handle form submission
//   const handleNextStep = async (e) => {
//     e.preventDefault();

//     // Validation
//     if (!username || !password) {
//       setErrorMessage('Please fill out all fields.');
//       return;
//     }

//     // Call the API to register the user
//     try {
//       const response = await fetch('http://localhost:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const result = await response.json();
//       if (!result.isSuccess) {
//         setErrorMessage(
//           result.message || 'An error occurred during registration.'
//         );
//         return;
//       }

//       // If successful, move to step 2
//       navigate('/signup/step2');
//     } catch (err) {
//       console.log('Error:', err);
//       setErrorMessage('An error occurred during registration.');
//     }
//   };

//   return (
//     <div className="signup-form">
//       <h2>Step 1: Sign Up</h2>
//       <form onSubmit={handleNextStep}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your username"
//             required
//           />
//           <img src={FaUser} alt="User Icon" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//           <img src={FaEye} alt="Password Icon" />
//         </div>

//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpStepOne;

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
        if (result.message === 'Username is already taken') {
          setErrorMessage('Username is already taken.');
        } else {
          setErrorMessage('Username is already taken.');
        }
        return;
      }

      navigate('/en/home/signup/step2');
    } catch (err) {
      console.log('Error occurred:', err);
      setErrorMessage('Username is already taken.');
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
