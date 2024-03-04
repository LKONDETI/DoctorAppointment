import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./mainPage";
import { useNavigate } from "react-router-dom";

function PartnersDisplay({ id }) {
  const [fetchError, setFetchError] = useState(null);
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    fetchPartner();
  }, [id]);

  const fetchPartner = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/${id}`);
      setPartner(response.data);
    } catch (error) {
      console.error('Error fetching company data:', error);
      setFetchError("Error fetching company data. Please try again later.");
    }
  };

  const navigate = useNavigate(); 

  // Function to handle redirection
  const redirectToAppointment = (appointmentUrl) => {
    navigate(appointmentUrl); // Use navigate function to redirect
  };

  return (
    <div>
      <MainPage />
      {fetchError && <p>{fetchError}</p>}
      {partner && (
        <div className="d-flex gap-4 row row-cols-4" style={{ marginLeft: "50px", marginTop: "20px" }}>
          {partner.map(part => (
            <div className="border border border-2 rounded-4 p-2 bg-warning-subtle" style={{ maxWidth: "18rem", marginLeft: "50px" }} key={part.id}>
              <h3 className="card-title align-middle">{part.name}</h3>
              <p className="card-text">{part.description}</p>
              <p className="card-text"><b>ADDRESS:</b>{part.address}</p>
              <p className="card-text"><b>CONTACT US:</b>{part.phoneNo}</p>
              {/* Call redirectToAppointment function onClick */}
              <button onClick={() => redirectToAppointment(part.book)} className="card btn btn-secondary">Book the Appointment</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PartnersDisplay;
