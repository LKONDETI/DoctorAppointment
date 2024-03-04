import React, { useState, useEffect } from "react";
import MainPage from "./mainPage";
import axios from "axios";

function CompanyDisplay() {
  const [fetchError, setFetchError] = useState(null);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetchCompany(); 
  }, []); 

  const fetchCompany = async () => {
    try {
      const response = await axios.get('http://localhost:8000/companies');
      setCompany(response.data); 
    } catch (error) {
      console.error('Error fetching company data:', error);
      setFetchError("Error fetching company data. Please try again later.");
    }
  };

  return (
    <div>
      <MainPage />
      {fetchError && <p>{fetchError}</p>}
      {company && (
        <div class="d-flex gap-4 row row-cols-4" style={{marginLeft: "50px",marginTop: "20px"}}>
       
          {company.map(c => (
            <div class="border border border-2 rounded-4 p-2 bg-warning-subtle" style={{maxWidth: "18rem", marginLeft: "50px"}}>
            <div key={c.id}>
              <h3  class="card-title align-middle">{c.name}</h3>
              <p class="card-text">{c.description}</p>
              <p class="card-text"><b>ADDRESS:</b>{c.address}</p>
              <p class="card-text"><b>CONTACT US:</b>{c.phoneNo}</p>
              <a href={c.next} class=" card btn btn-secondary">NEXT</a>
            </div></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyDisplay;
