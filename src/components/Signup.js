import React from "react";
import { useState } from "react";
import axios from "axios";

function Signin(){
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/db`);
          const users = response.data;
        const user = users.find((user) => user.lastname === lastname && user.phone === phone);
        console.log(localStorage.getItem('userId'))
          if (user) {
            alert('Login successful');
            const { id } = response.data; 
            localStorage.setItem('userId', id);
          } else {
            setErrorMessage('Invalid Last Name or phone number');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
      const getUserIdFromStorage = () => {
        return console.log(localStorage.getItem('userId'));
      };
return(
   
  <div >
    <div class="card text-white" style={{borderRadius: '1rem',backgroundColor:"grey"}}>
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div>
          <div class="card-body p-5 text-center">

            <div>

              <div class="form-outline form-white mb-4">
                <input type="text" 
                class="form-control form-control-lg"
                placeholder="Last Name"
                value={lastname}
                onChange={e => setLastName(e.target.value)}
                />
              </div>
              
                
              <div class="form-outline form-white">
                <input type="number"  
                class="form-control form-control-lg" 
                placeholder="Enter your phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)} />
              </div>

               
              <button class="btn btn-outline-dark btn-lg px-5 " type="submit" onClick={handleLogin}>Login</button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            </div>
           
          </div>
        </div>
      </div>
    </div>

 
  </div>

)
}

export default Signin;