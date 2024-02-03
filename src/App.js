import './App.css';
import MainPage from './components/mainPage';
import Login from './components/login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
    <Routes>
      
      <Route path='/' element={<MainPage/>} />
      <Route path='/login' element={<Login/>}></Route>
      
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
