import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/landingpage';
import SignupForm from './components/signup';


function App() {
  return (
    <div className='home-bg'>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
