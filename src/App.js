import React,{useState} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import User from './components/User';
import Modal from './components/Modal';
import Contact from './components/Contact';
import { Toast } from 'flowbite-react';
import TradingDashboard from './components/TradingDashboard';
import Date from './components/Date';
import Testing from './components/Testing';
import TradeDetails from './components/TradeDetails';
import Price from './components/Price';
import Maintainence from './components/Maintainence';
import RegistrationPage from './components/RegistrationPage';
import DailyPlreport from './components/DailyPlreport';
import EditUserDetails from './components/EditUserDetails';
function App() {
 
  return (
 <>
<Router>
  <Routes>
    <Route exact path="/" element={<LandingPage/>}></Route>
    <Route exact path="/user_demo" element={<User/>}></Route> 
    <Route exact path="/chart" element={<TradingDashboard/>}></Route> 
    <Route exact path="/modal" element={<Modal/>}></Route> 
    <Route exact path="/contact" element={<Contact/>}></Route> 
    <Route exact path="/date" element={<Date/>}></Route>
    <Route exact path="/tradeDetail" element={<TradeDetails/>}></Route>
    <Route exact path="/testing" element={<Testing/>}></Route>
    <Route exact path="/pricing" element={<Price/>}></Route>
    <Route exact path="/maintainence" element={<Maintainence/>}></Route>
    <Route exact path="/register" element={<RegistrationPage/>}></Route>
    <Route exact path="/edituser" element={<EditUserDetails/>}></Route>
    <Route exact path="/dailyPL" element={<DailyPlreport/>}></Route>

  </Routes>
</Router>


 </>
  );
}

export default App;
