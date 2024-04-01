import React from "react";
import supabase from "../config/supabaseClient";
import { useState } from "react";
import Calendar from "react-calendar";
//import { Link } from "react-router-dom";
//import MainPage from "./mainPage";

function CompaniesWithSupa(){
    
    const [formData, setFormData] = useState({
      company_id: '',
      customer_first_name: '',
      customer_last_name: '',
      customer_address: '',
      customer_phone: '',
      customer_email: '',
      customer_city: '',
      customer_state:'',
      customer_zip: '',
      partner_id: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    
      const handleSubmit = async (formData) => {
        try {
          const { data, error } = await supabase
            .from('customer')
            .insert([formData]);
          if (error) {
            throw error;
          }
          console.log('Data inserted successfully:', data);
          // Optionally, you can perform some actions after successful submission
        } catch (error) {
          alert('add your details')
          console.error('Error inserting data:', error.message);
        }
      };
      
    return (
      <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);}}>

          <div>
          {/* <h5>Select Date:</h5>
            <Calendar
            onChange={(date) => handleChange(date, 'date')}
          value={formData.date}  
        /> */}
        {/* <ul>
              {timeSlots.map((slot, index) => (
                <button class={`btn btn-outline-secondary ${selectedSlot === slot ? 'active' : ''}`} key={index} onClick={() => handleSlotSelect(slot)}>{slot}</button>
              ))}
            </ul> */}

          </div>
          <input type="number" name="company_id" placeholder="company number" value= {formData.company_id} onChange={handleChange}/>
          <input type="text" name="customer_first_name" placeholder="First name" value= {formData.customer_first_name} onChange={handleChange}/>
          <input type="text" name="customer_last_name" placeholder="Last name" value= {formData.customer_last_name} onChange={handleChange}/>
          <input type="text" name="customer_address" placeholder="Adress" value= {formData.customer_address} onChange={handleChange}/>
          <input type="text" name="customer_phone" placeholder="phone number" value= {formData.customer_phone} onChange={handleChange}/>
          <input type="email" name="customer_email" placeholder="email" value= {formData.customer_email} onChange={handleChange}/>
          <input type="text" name="customer_city" placeholder="city" value= {formData.customer_city} onChange={handleChange}/>
          <input type="text" name="customer_state" placeholder="state" value= {formData.customer_state} onChange={handleChange}/>
          <input type="text" name="customer_zip" placeholder="zip code" value= {formData.customer_zip} onChange={handleChange}/>
          <input type="text" name="partner_id" placeholder="partner number" value= {formData.partner_id} onChange={handleChange}/>
          {/* <label>Select date:<input type="date" name="date" placeholder="date" value= {formData.date} onChange={handleChange}/></label>
           */}
  <button type="submit">Submit</button>
</form>

      </div>
    );

}
// const generateTimeSlots = () => {
//   const startTime = 8;
//   const endTime = 18;
//   const timeSlots = [];

//   for (let i = startTime; i <= endTime; i++) {
//     timeSlots.push(`${i}:00 `);
//     if (i !== endTime) {
//       timeSlots.push(`${i}:30 `);
//     }
//   }

//   return timeSlots;
// };


export default CompaniesWithSupa;