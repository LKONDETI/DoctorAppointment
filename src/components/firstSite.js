import React from "react";
import { useState } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MainPage from "./mainPage";
import { Link } from "react-router-dom";


function Site(){
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [doctor, setDoctor] = useState('');
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

const companyOptions = [
  { value: 'company1', label: 'Company 1' },
  { value: 'company2', label: 'Company 2' },
  { value: 'company3', label: 'Company 3' },
  
];

const doctorOptions = [
  { value: 'doctor1', label: 'Doctor 1' },
  { value: 'doctor2', label: 'Doctor 2' },
  { value: 'doctor3', label: 'Doctor 3' },
  
];

const handleCompanyChange = (event) => {
  setCompany(event.target.value);
};

const handleDoctorChange = (event) => {
  setDoctor(event.target.value);
};

  const handleSubmit = () => {
    if (selectedDate && selectedSlot) {
        
        axios.post('http://localhost:8000/customers', {
            date: selectedDate.toISOString().split('T')[0],
            slot: selectedSlot,
            firstname,
            lastname,
            email,
            phone,
            company,
            doctor
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
          <button className="btn btn-primary" onClick={handleTimeSlotSelect}>Book</button></div>
                    
        </div>
      </div>
    </div>
       {open && (
        <form onSubmit={handleSubmit}>
            <div className="container">
            
            <div className="row">
      <div className="col">
        <b>Select Company:</b>
        <select value={company} onChange={handleCompanyChange} required>
          <option value="">Select Company</option>
          {companyOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="col">
        <b>Select Doctor:</b>
        <select value={doctor} onChange={handleDoctorChange} required>
          <option value="">Select Doctor</option>
          {doctorOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div></div>
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
                            <button type="submit" >Book your Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            
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