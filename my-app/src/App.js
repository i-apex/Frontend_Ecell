import './App.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/footer';
import AdminUI from './AdminUI';
import UserUI from './UserUI';
import axios from 'axios';

function App() {
  const [userRole, setUserRole] = useState('user'); // Default to 'user'

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get('/userRole');
        setUserRole(response.data.role);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Unauthorized, setting user role to 'user'
          setUserRole('user');
        } else {
          console.error('Error fetching user role:', error);
        }
      }
    };

    fetchUserRole();
  }, [userRole]);

  return (
    <>
      {userRole === 'admin' ? <AdminUI /> : <UserUI />}
      <Footer />
    </>
  );
}

export default App;