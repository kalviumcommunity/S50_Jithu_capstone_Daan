import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/landingpage';
import SignupForm from './components/signup';
import Loginform from './components/login';
import Aboutpage  from "./components/about"
import Contribute from "./components/contribute"
import Hiw from "./components/hiw"
import Mainpage from './components/mainpage';
import Community from './components/community';
import Account from './components/account';
import Editpost from './components/editpost';


function App() {
  return (
    <div className='home-bg'>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<Loginform />} />
        <Route path='/about' element={<Aboutpage/>} />
        <Route path='/contribute' element={<Contribute/>} />
        <Route path='/hiw' element={<Hiw/>} />
        <Route path='/mainpage' element={<Mainpage/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/postedit/:id' element={<Editpost/>} />

      </Routes>
    </div>
  );
}

export default App;
