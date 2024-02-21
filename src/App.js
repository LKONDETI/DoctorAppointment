import './App.css';
import MainPage from './components/mainPage';
import Login from './components/login';
import Site from './components/firstSite';
import CompanyDisplay from './components/company';
import DoctorDetails from './components/details';
import Signin from './components/Signup';
import UserDetailsPage from './components/auth';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
    <Routes>

      <Route path='/log' element={<Signin/>} />
      <Route path='/main' element={<MainPage/>} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/site' element ={<Site/>} />
      <Route path='/' element ={<CompanyDisplay/>} />
      <Route path='/1' element ={<DoctorDetails/>} />
      <Route path='/page' element ={<UserDetailsPage/>} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
