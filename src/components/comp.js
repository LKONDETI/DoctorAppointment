import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import MainPage from "./mainPage";


function CompaniesWithSupa(){
  
  const [companies, setCompanies] = useState([]);
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();
  const [latestBookingId, setLatestBookingId] = useState(null);
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

    useEffect(() => {
      const fetchPartners = async () => {
        const { data, error } = await supabase
          .from('partner')
          .select('*');
        if (error) console.error('Error fetching partners:', error);
        else setPartners(data);
      };
  
      const fetchCompanies = async () => {
        const { data, error } = await supabase
          .from('company')
          .select('*');
        if (error) console.error('Error fetching companies:', error);
        else setCompanies(data);
      };
      const fetchLatestBooking = async () => {
        const { data, error } = await supabase
          .from('booking')
          .select('id')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();
          
        if (error) {
          console.error('Error fetching latest booking:', error);
        } else if (data) {
          setLatestBookingId(data.id);
        }
      };

      fetchLatestBooking();
      fetchPartners();
      fetchCompanies();
      
    }, []);
      
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    
      const handleSubmit = async (formData) => {

        if (!latestBookingId) {
          alert('No booking available.');
          return;
        }
    
        const dataToSubmit = {
          ...formData,
          booking_number: latestBookingId
        };

        try {
          const { data, error } = await supabase
            .from('customer')
            .insert([dataToSubmit]);
          if (error) {
            throw error;
          }
          // console.log('Data inserted successfully:', data);
          alert('your slot is booked')
          navigate('/')
        } catch (error) {
          alert('add your details')
          console.error('Error inserting data:', error.message);
        }
      };
      
    return (
      <div>
        {/* <MainPage/> */}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);}}>

          <div>
          

          </div>
          {/* <input type="number" name="company_id" placeholder="company number" value= {formData.company_id} onChange={handleChange}/> */}
          <input type="text" name="customer_first_name" placeholder="First name" value= {formData.customer_first_name} onChange={handleChange}/>
          <input type="text" name="customer_last_name" placeholder="Last name" value= {formData.customer_last_name} onChange={handleChange}/>
          <input type="text" name="customer_address" placeholder="Adress" value= {formData.customer_address} onChange={handleChange}/>
          <input type="text" name="customer_phone" placeholder="phone number" value= {formData.customer_phone} onChange={handleChange}/>
          <input type="email" name="customer_email" placeholder="email" value= {formData.customer_email} onChange={handleChange}/>
          <input type="text" name="customer_city" placeholder="city" value= {formData.customer_city} onChange={handleChange}/>
          <input type="text" name="customer_state" placeholder="state" value= {formData.customer_state} onChange={handleChange}/>
          <input type="text" name="customer_zip" placeholder="zip code" value= {formData.customer_zip} onChange={handleChange}/>
          {/* <input type="text" name="partner_id" placeholder="partner number" value= {formData.partner_id} onChange={handleChange}/> */}
          
          
          <label>
          Select Company:
          <select
            name="company_id"
            value={formData.company_id}
            onChange={handleChange}
          >
            <option value="">Select a company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.company_name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Select Partner:
          <select
            name="partner_id"
            value={formData.partner_id}
            onChange={handleChange}
          >
            <option value="">Select a partner</option>
            {partners.map((partner) => (
              <option key={partner.id} value={partner.id}>
                {partner.name}
              </option>
            ))}
          </select>
        </label>

          
          
          {/* <label>Select date:<input type="date" name="date" placeholder="date" value= {formData.date} onChange={handleChange}/></label>
           */}
  <button type="submit">Submit</button>
  <div>
           
  </div>
</form>

      </div>
    );

}

export default CompaniesWithSupa;