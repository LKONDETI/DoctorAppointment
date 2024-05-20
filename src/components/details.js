import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainPage from "./mainPage";

function PartnerDetails(){
    const [loading, setLoading] = useState(true);
    const [partners, setPartners] = useState([]);
  
    useEffect(() => {
      const fetchPartners = async () => {
        try {
          const { data: partners, error } = await supabase
            .from('partner')
            .select('*');
          if (error) {
            throw error;
          }
          setPartners(partners);
        } catch (error) {
          console.error('Error fetching companies:', error.message);
        }
        setLoading(false);
      };
  
      fetchPartners();
    }, []);
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <div>
        <MainPage />
        {
        <div class="d-flex gap-4 row row-cols-4" style={{marginLeft: "50px",marginTop: "20px"}}>
       
          {partners.map(partner => (
            <div class="border border border-2 rounded-4 p-2 bg-warning-subtle" style={{maxWidth: "20rem", marginLeft: "50px"}}>
            <div key={partner.company_id}>
        
              <h3  class="card-title align-middle">{partner.name}</h3>
              {/* <p class="card-text">{partner.company_description}</p> */}
              <p class="card-text"><b>ADDRESS:</b>{partner.address}</p>
              <p class="card-text">{partner.city}, {partner.state}, {partner.zip}, {partner.country}</p>
              <p class="card-text"><b>CONTACT US:</b>{partner.phone}</p>
              <button class="border border-warning"> <Link to="/book"> Book your Appointment</Link></button>
              {/* <a href={c.next} class=" card btn btn-secondary">NEXT</a> */}
            </div></div>
          ))}
        </div>
      }

      </div>
    );
}


export default PartnerDetails;