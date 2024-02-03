import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingStatus from "./status";

function BookSlot() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTime, setselectedTime] = useState('');
    const [visible, setVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [open,setOpen] = useState(false);
    const [detail,setDetail] = useState(false);
    
    const handleTimeSlotSelect = ( ) => {
        setOpen(true);
        alert(`Should I proceed with ${selectedDate} and ${selectedTime}?`);
        console.log(`${selectedDate} and ${selectedTime} are selected!`);
    };

    const handleDateSelect = (event) => {
        setSelectedDate(event.target.value);
    };
    const handleClick = (time) => {
        setselectedTime(time);
    };
    
    const handleSubmit = async () => {
        try {
           const response = await axios.post(
            'http://localhost:8000/db', {
                selectedDate,
                selectedTime,
                name,
                email,
                phone
            }); 
             setDetail(true);
            console.log(response.db);
        } catch (error) {
          console.error('Error logging in:', error);

        }
      };

     

    return (
        <div>
            <div>
                <button className="btn btn-secondary align-middle" onClick={() => setVisible(!visible)}>Book your slot</button>
            </div>

            {visible && (
                    <form onSubmit={handleTimeSlotSelect}>
                    <div>
                        <div className="col">
                            <b>Select Appointment Date:</b>
                            <input type="date" placeholder="Select Date" value={selectedDate} onChange={handleDateSelect} required/>
                        </div>
            
                        <div>
                            <h2>Time Slots for {selectedDate}</h2>
                            <div className="d-flex justify-content-evenly">
                                <button class={`btn btn-outline-secondary ${selectedTime === '8:00 AM' ? 'active' : ''}`} onClick={() => handleClick('8:00 AM')}>8:00 AM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '9:00 AM' ? 'active' : ''}`} onClick={() => handleClick('9:00 AM')} >9:00 AM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '10:00 AM' ? 'active' : ''}`} onClick={() => handleClick('10:00 AM')}>10:00 AM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '11:00 AM' ? 'active' : ''}`} onClick={() => handleClick('11:00 AM')}>11:00 AM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '12:00 PM' ? 'active' : ''}`} onClick={() => handleClick('12:00 PM')}>12:00 PM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '1:00 PM' ? 'active' : ''}`} onClick={() => handleClick('1:00 PM')}>1:00 PM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '2:00 PM' ? 'active' : ''}`} onClick={() => handleClick('2:00 PM')}>2:00 PM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '3:00 PM' ? 'active' : ''}`} onClick={() => handleClick('3:00 PM')}>3:00 PM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '4:00 PM' ? 'active' : ''}`} onClick={() => handleClick('4:00 PM')}>4:00 PM</button>
                                <button class={`btn btn-outline-secondary ${selectedTime === '5:00 PM' ? 'active' : ''}`} onClick={() => handleClick('5:00 PM')}>5:00 PM</button>
                                
                            </div>
                        </div>
                        <button type="submit" onClick={handleTimeSlotSelect}>Book</button>
                    </div>
                    </form>
            )}

            <div>
                {/* This form will be visible only after a time slot is selected */}
                {open && (
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <b>Name:</b>
                                    <input type="text" placeholder="Enter your Name" value={name} onChange={e => setName(e.target.value)} required/>
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
            {detail &&(
            <div>
            <div class="card border-dark border-2 rounded">
            <div class="card-body" >
                <h5> Congraulations! You have successfull booked your Appointment on {selectedDate} at {selectedTime}</h5>  
                </div>
            </div>
          </div>)}
        </div>
    );
}

export default BookSlot;
