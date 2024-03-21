import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/landingpage';
import SignupForm from './components/signup';
import Loginform from './components/login';
import Aboutpage  from "./components/about"
import Contribute from "./components/contribute"


function App() {
  return (
    <div className='home-bg'>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<Loginform />} />
        <Route path='/about' element={<Aboutpage/>} />
        <Route path='/contribute' element={<Contribute/>} />

      </Routes>
    </div>
  );
}

export default App;
