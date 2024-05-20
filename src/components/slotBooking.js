import React from "react";
import { useState } from "react";
// import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MainPage from "./mainPage";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import CompaniesWithSupa from "./comp";


function Booking(){
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const timeSlots = generateTimeSlots();
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
};

    const handleSubmit = async (Data) => {
        try {
        const { data, error } = await supabase
            .from('booking')
            .insert([{appointment_date: selectedDate,
              appointment_time: selectedSlot,
              appointment_status: selectedOption
                      
                     }]);
                      
        if (error) {
            throw error;
        }
        console.log('Data inserted successfully:', data);
        setOpen(true)
        // navigate('/company')

        } catch (error) {
          alert('add your details')
          console.error('Error inserting data:', error.message);
        }
    };

  return (
    <div>
      <MainPage/>
      <button type="button" class="btn btn-outline-secondary"><a href="http://localhost:3000/partner">Go back</a></button>

    <div className="d-flex align-items-stretch">
      <div>
        <div>
          <div>
            <h5>Select Date:</h5>
            <Calendar
          onChange={handleDateChange}
          value={selectedDate}  
        />
          </div>
          <div>
          <div>
            <h5>Select time </h5>
            <ul>
              {timeSlots.map((slot, index) => (
                <button class={`btn btn-outline-secondary ${selectedSlot === slot ? 'active' : ''}`} key={index} onClick={() => handleSlotSelect(slot)}>{slot}</button>
              ))}
            </ul>
            
          </div>
          </div>
          
          <div>
          <div>
     
      <label>
        <input
          type="radio"
          value="booked"
          checked={selectedOption === 'booked'}
          onChange={handleChange}
        />
        schedule your appointment
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="cancelled"
          checked={selectedOption === 'cancelled'}
          onChange={handleChange}
        />
        cancel your appointment
      </label>
      
      
    </div>
          <button className="btn btn-primary" onClick={handleSubmit}>next</button></div>
                    
        </div>
        <div>
          {open &&(<CompaniesWithSupa/>
          )}
        </div>
      </div>
    </div>
       
    </div>
  );
};

const generateTimeSlots = () => {
  const startTime = 8;
  const endTime = 18;
  const timeSlots = [];

  for (let i = startTime; i <= endTime; i++) {
    timeSlots.push(`${i}:00 `);
    if (i !== endTime) {
      timeSlots.push(`${i}:30 `);
    }
  }

  return timeSlots;
};


export default Booking;