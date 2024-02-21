import React, { useState, useEffect } from "react";
import axios from "axios";

function UserDetailsPage({ id, authToken }) {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/db`);
        const users = response.data;
      const user = users.find((user) => user.lastname === lastname && user.phone === phone);
        
        if (user) {
          
          alert('Login successful');
          window.location.href="/";
        } else {
          setErrorMessage('Invalid Last Name or phone number');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/db/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id, authToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userDetails) {
    return <div>User details not found</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userDetails.name}</p>
      <p>Phone Number: {userDetails.phone}</p>
      {/* Display other user details as needed */}
    </div>
  );
}

export default UserDetailsPage;
