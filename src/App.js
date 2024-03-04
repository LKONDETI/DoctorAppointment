import './App.css';
//import supabase from './config/supabaseClient';

import MainPage from './components/mainPage';
// import CompanyDisplay from './components/sample1';
import Login from './components/login';
import Site from './components/firstSite';
import CompanyDisplay from './components/company';
//import DoctorDetails from './components/details';
import Signin from './components/Signup';
import UserDetailsPage from './components/auth';
import PartnersDisplay from './components/partner';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  //console.log(supabase)

  return (
    <div>
      <Router>
    <Routes>

      <Route path='/log' element={<Signin/>} />
      <Route path='/main' element={<MainPage/>} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/site' element ={<Site/>} />
      <Route path='/' element ={<CompanyDisplay/>} />
      <Route path='/${id}' element ={<PartnersDisplay/>} /> 
      {/* <Route path='/1' element ={<DoctorDetails/>} /> */}
      <Route path='/page' element ={<UserDetailsPage/>} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
