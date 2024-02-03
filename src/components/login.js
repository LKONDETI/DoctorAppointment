import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";


const Login = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [box, setBox] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/login', {
          name: name,
          phone: phone
        });
        console.log(response.data); // Handle successful login
      } catch (error) {
        setError(error.response.data.message); // Handle error
      }
    };

    // const handleSubmit = async () => {
    //     try {
    //       const response = await axios.get(`http://localhost:8000/db`);
    //       const db = response.data;
    //       const users = db.find((user) => user.name === name && user.phone === phone);
    //       if (users) {
    //         alert('Login successful');
    //         setBox(true);
           
    //       } else {
    //         setErrorMessage('Invalid username or password');
    //       }
    //     } catch (error) {
    //       console.error('Error logging in:', error);
    //     }
    //   };

  

  return (
    <div>
<div>
        <nav class="navbar bg-info-subtle" >
            <div class="container-fluid">
            <MdOutlineMedicalServices />
            
               <div>
               
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a>ContactUs</a>
                    </li>
                    <li class="nav-item">
                        <div><a href="http://localhost:3000/"><IoIosLogOut /></a></div>
                    </li></ul>
               </div>
            </div>
        
        </nav></div>
<div class="container py-5 mh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="card text-white" style={{borderRadius: '1rem',backgroundColor:"grey"}}>
          <div class="card-body p-5 text-center">
      <h2>Login</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            
          />
        </div>
        <button  onClick={handleSubmit}>Login</button> 
        </form></div>
    </div></div></div>
        {box&&(
        <div >
        <div class="card card-body bg-info">
            This is just a example 
      </div></div>
     )}
   </div >
  );
};

export default Login;
