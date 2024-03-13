import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/landingpage';


function App() {
  return (
    <div className='home-bg'>
      <Routes>
        <Route path='/' element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default App;
