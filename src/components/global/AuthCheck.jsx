/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCheck = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        try {
          const response = await fetch(`http://localhost:5000/validate-token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          const result = await response.json();

          if (response.ok && result.isValid) {
            const profileResponse = await fetch(
              `http://localhost:5000/users/${userId}`,
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (profileResponse.ok) {
              const profileData = await profileResponse.json();

              console.log('Profile data:', profileData);
              navigate('/en/dashboard');
            } else {
              throw new Error('Failed to fetch profile data');
            }
          } else {
            throw new Error('Invalid token');
          }
        } catch (error) {
          console.error('Authentication failed:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          navigate('/en/home');
        }
      } else {
        navigate('/en/home');
      }
      setLoading(false);
    };

    verifyToken();
  }, [navigate]);

  return loading ? <div>Loading...</div> : children;
};

export default AuthCheck;
