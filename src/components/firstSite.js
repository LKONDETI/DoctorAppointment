import React from "react";
import { useState } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MainPage from "./mainPage";

function Site(){
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [open,setOpen] = useState(false);
  const timeSlots = generateTimeSlots();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
};

const handleTimeSlotSelect = ( ) => {
  alert("Do you want to book the appointment on that date and time?")
  setOpen(true);
};

  const handleSubmit = () => {
    if (selectedDate && selectedSlot) {
        // Make a POST request to your JSON server to store the selected date and slot
        axios.post('http://localhost:8000/db', {
            date: selectedDate.toISOString().split('T')[0], // Format the date without time
            slot: selectedSlot,
            firstname,
            lastname,
            email,
            phone
        })
        .then(response => {
            console.log('Data successfully stored:', response.data);
           
        })
        .catch(error => {
            console.error('Error storing data:', error);
            
        });
    } else {
        console.error('Please select both a date and a time slot before storing.');
       
    }
};
  return (
    <div>
      <MainPage/>
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
          <button className="btn btn-primary" onClick={handleTimeSlotSelect}>Book</button></div>
                    
        </div>
      </div>
    </div>
       {open && (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <b> First Name:</b>
                        <input type="text" placeholder="Enter your Name" value={firstname} onChange={e => setFirstName(e.target.value)} required/>
                    </div>
                    <div className="col">
                        <b>Last Name:</b>
                        <input type="text" placeholder="Enter your Name" value={lastname} onChange={e => setLastName(e.target.value)} required/>
                    </div>
                    <div className="col">
                        <b>Email:</b>
                        <input type="email" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className="col">
                        <b>Phone number:</b>
                        <input type="number" placeholder="Enter your Phone number" value={phone} onChange={e => setPhone(e.target.value)} required/>
                    </div>
                    <div className="row">
                        <div className="col-xs-3">
                            <button type="submit">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div><BookingStatus/></div> */}
        </form>
    )}             

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


export default Site;