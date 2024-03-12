import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './Pages/TeamPage';
import Home from './Pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Team/' element={<TeamPage />}/>
      </Routes>
    </>
  );
}

export default App;
