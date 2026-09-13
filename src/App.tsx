import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { Navigate, Route, Routes } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import LoginForm from './components/LoginForm/LoginForm';
import MainPanel from './components/MainPanel/MainPanel';
import ProfilePanel from './components/ProfilePanel/ProfilePanel';
import NotFound from './pages/NotFound/NotFound';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';


function App() {

  const isDarkTheme: boolean = useAppSelector((state) => state.uiVariables.darkTheme);

  return (
    <div className={`wrapper ${isDarkTheme ? 'dark-theme' : ''}`}>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route element={ <MainPage /> }>
          <Route index path='home' element={ <MainPanel /> }/>
          <Route path='profile' element={ <ProfilePanel /> }/>
          <Route path='settings' element={ <SettingsPanel /> } />
        </Route>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<NotFound />} />
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
