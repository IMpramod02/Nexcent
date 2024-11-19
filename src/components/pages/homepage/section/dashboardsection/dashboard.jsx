/* eslint-disable no-unused-vars */
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
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (!storedToken || !storedUserId) {
      console.error(
        'No token or userId in local storage, redirecting to login...'
      );
      navigate('/en/home/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/users/${storedUserId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

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
  }, [navigate]);

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
