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
    </div>
  );
}

export default App;
