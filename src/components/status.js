import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function BookingStatus(id){


    const [status, setStatus]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/db')
      .then(response => {
        setStatus(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredStatus = status.filter(item => item.id === id);

  return(
    <div>
        
          <div class="card border-dark border-2 rounded">
            <div class="card-body" >
            
                {filteredStatus.map(item=>(
                <div key={item.id}>
                <p> Hi {item.name}, You have successfull booked your Appointment on {item.selectedDate} at {item.selectedTime}</p>
                 
                </div>))}
              
            </div>
          </div>
          
      </div>
    
  )
}

export default BookingStatus;