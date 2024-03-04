import React, { useEffect, useState } from 'react';

import supabase from '../config/supabaseClient';
import MainPage from './mainPage';
import HospitalCard from '../pages/hosCard';

function CompanyDisplay() {
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hospital, setHospitals] = useState( );

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const { data, error } = await supabase.from('hospitals').select('*');
        if (error) {
          console.error('Error fetching hospitals:', error.message);
        } else {
          setHospitals(data);
          console.log('Fetched data:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchHospitals();
  }, []);
  //   const fetchCompanies = async () => {
  //     setIsLoading(true);
  //     const { data, error } = await supabase
  //       .from('hospitals')
  //       .select('*');

  //     if (error) {
  //       setFetchError('Could not fetch the Hospitals');
  //       setHospitals(null);
  //       console.error(error);
  //     } else {
  //       setHospitals(data);
  //       setFetchError(null);
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchCompanies();
  // }, []);

  return (
    <div>
      <MainPage/>
      {isLoading && <p>Loading...</p>}
      {fetchError && <p>{fetchError}</p>}
      {hospital && (
        <div>
          {hospital.map(h => (
            <div class="card bg-success text-white" key={h.id}>
            <h3>{h.name}</h3>
            <p>{h.description}</p>
            <p>{h.address}</p>
            <p>{h.phoneNo}</p></div>
            // <HospitalCard class="card bg-success text-white" key={h.id} hospitals={hospitals}/>  
            
          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyDisplay;
