/* eslint-disable no-unused-vars */
// import React from 'react';
// import './dashboard.scss';

// const DashboardPage = ({ username, email }) => {
//   return (
//     <div className="dashboard">
//       <div className="dashboard-content">
//         <div className="dashboard-image">
//           <img src="https://via.placeholder.com/500" alt="Welcome " />
//         </div>
//         <div className="dashboard-text">
//           <h1>Welcome Santosh Kumar!!!</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
//             amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
//             Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
//             tristique iaculis.
//           </p>
//           <p>
//             Click here to{' '}
//             <a href="/newsletter-signup">
//               Signup for newsletter using Santosh@gmail.com
//             </a>
//           </p>
//           <button className="view-more-button">View More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './dashboard.scss';

// const DashboardPage = () => {
//   const [userData, setUserData] = useState({ fullname: '', email: '' });
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { userId, token } = location.state || {};

//   useEffect(() => {
//     if (!userId || !token) {
//       // Redirect to login if no userId or token is found in the state
//       navigate('/en/home/login');
//       return;
//     }

//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/users/${userId}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData({
//             fullname: data.fullname,
//             email: data.email,
//           });
//         } else {
//           console.error('Failed to fetch user data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [userId, token, navigate]);

//   return (
//     <div className="dashboard">
//       <div className="dashboard-content">
//         <div className="dashboard-image">
//           <img src="https://via.placeholder.com/500" alt="Welcome" />
//         </div>
//         <div className="dashboard-text">
//           <h1>Welcome {userData.fullname}!!!</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
//             amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
//             Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
//             tristique iaculis.
//           </p>
//           <p>
//             Click here to{' '}
//             <a href="/newsletter-signup">
//               Signup for newsletter using {userData.email}
//             </a>
//           </p>
//           <button className="view-more-button">View More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './dashboard.scss';

// const DashboardPage = () => {
//   const [userData, setUserData] = useState({ fullname: '', email: '' });
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userId = location.state?.userId;
//   const token = location.state?.token;

//   useEffect(() => {
//     if (!userId || !token) {
//       console.error(
//         'No userId or token found in location state, redirecting to login...'
//       );
//       navigate('/en/home/login'); // Correct redirection path
//       return;
//     }

//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/users/${userId}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData({
//             fullname: data.fullname,
//             email: data.email,
//           });
//         } else {
//           console.error('Failed to fetch user data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [userId, token, navigate]);

//   return (
//     <div className="dashboard">
//       <div className="dashboard-content">
//         <div className="dashboard-image">
//           <img src="https://via.placeholder.com/500" alt="Welcome" />
//         </div>
//         <div className="dashboard-text">
//           <h1>Welcome, {userData.fullname}!</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
//             amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
//             Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
//             tristique iaculis.
//           </p>
//           <p>
//             Click here to{' '}
//             <a href="/newsletter-signup">
//               sign up for our newsletter using {userData.email}
//             </a>
//           </p>
//           <button className="view-more-button">View More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './dashboard.scss';

const DashboardPage = () => {
  const [userData, setUserData] = useState({ fullname: '', email: '' });
  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.state?.userId;
  const token = location.state?.token;

  useEffect(() => {
    if (!userId || !token) {
      console.error(
        'No userId or token found in location state, redirecting to login...'
      );
      navigate('/en/home/login');
      return; // use effect cannot have method inside it
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData({
            fullname: data.fullname,
            email: data.email,
          });
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId, token, navigate]);

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="dashboard-image">
          <img src="https://via.placeholder.com/500" alt="Welcome" />
        </div>
        <div className="dashboard-text">
          <h1>Welcome, {userData.fullname}!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis.
          </p>
          <p>
            Click here to{' '}
            <a href="/newsletter-signup">
              sign up for our newsletter using {userData.email}
            </a>
          </p>
          <button className="view-more-button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
