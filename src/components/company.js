import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainPage from "./mainPage";

function CompanyDisplay(){
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
  
    useEffect(() => {
      const fetchCompanies = async () => {
        try {
          const { data: companies, error } = await supabase
            .from('company')
            .select('*');
          if (error) {
            throw error;
          }
          setCompanies(companies);
        } catch (error) {
          console.error('Error fetching companies:', error.message);
        }
        setLoading(false);
      };
  
      fetchCompanies();
    }, []);
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <div>
        <MainPage />
        {
        <div class="d-flex gap-4 row row-cols-4" style={{marginLeft: "50px",marginTop: "20px"}}>
       
          {companies.map(company => (
            <div class="border border border-2 rounded-4 p-2 bg-warning-subtle" style={{maxWidth: "20rem", marginLeft: "50px"}}>
            <div key={company.company_id}>
              <img src="{company.company_logo}"></img>
              <h3  class="card-title align-middle">{company.company_name}</h3>
              <p class="card-text">{company.company_description}</p>
              <p class="card-text"><b>ADDRESS:</b>{company.company_address}</p>
              <p class="card-text">{company.company_city}, {company.company_state}, {company.company_zip}, {company.company_country}</p>
              <p class="card-text"><b>CONTACT US:</b>{company.company_phone}</p>
              <p class="card-text">{company.company_email}</p>
              <a href="{company.company_website}"> Go to the company website</a><br/>
              <button type="button" class="btn btn-light"> <Link to="/partner"> NEXT </Link></button>
              {/* <a href={c.next} class=" card btn btn-secondary">NEXT</a> */}
            </div></div>
          ))}
        </div>
      }
      </div>
    );
}


export default CompanyDisplay;
