import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import LoginForm from './components/LoginForm/LoginForm';


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route index element={ <MainPage /> } />
      </Routes>

      <svg style={{ display: "none" }}>
        <defs>
          <filter id="liquid-refraction">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
