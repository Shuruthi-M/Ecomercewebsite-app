import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Signup from './signup';
import Login from './log';
import Home from './home';
import View from './view' ;
import Deals from './deals';
import Delivery from './delivery';
import Toys from './toys';
import Aboutus from './aboutus';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Ecomercewebsite-app" element={<Login />} />
        <Route path="/log" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/view/:id" element={<View />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/toys" element={<Toys/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
