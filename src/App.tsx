import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./sass/main.scss";
import ChooseBok from '../src/pages/ChooseBok';
import FindPassword from '../src/pages/FindPassword';
import Join from '../src/pages/Join'
import Login from '../src/pages/Login';
import MyBoard from '../src/pages/MyBoard';
import RegisterBok from '../src/pages/RegisterBok';
import Share from '../src/pages/Share';
import Splash from '../src/pages/Splash';
import UserBoard from '../src/pages/UserBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/findMyPassword' element={<FindPassword />} />
        <Route path='/chooseBokPouch' element={<ChooseBok />} />
        <Route path='/registerMessage' element={<RegisterBok />} />
        <Route path='/myBoard' element={<MyBoard />} />
        <Route path='/userBoard' element={<UserBoard />} />
        <Route path='/shareBySNS' element={<Share />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
