import './App.css';
// import supabase from './config/supabaseClient';

import MainPage from './components/mainPage';
import Login from './components/login';
import Site from './components/firstSite';
import CompanyDisplay from './components/company';
import PartnerDetails from './components/details'
import Signin from './components/Signup';
import UserDetailsPage from './components/auth';
import CompaniesWithSupa from './components/comp';

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
      <Route path='/register' element ={<Site/>} />
      <Route path='/' element ={<CompanyDisplay/>} />
      <Route path='/1' element ={<PartnerDetails/>} />
      <Route path='/page' element ={<UserDetailsPage/>} />
      <Route path='/company' element ={<CompaniesWithSupa/>} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
