import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './Pages/TeamPage';
import EventsPage from './Pages/EventsPage';
import InnovationsPage from './Pages/InnovationsPage';
import BlogsPage from './Pages/BlogsPage';
import Home from './Pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Team/' element={<TeamPage />}/>
        <Route path='Events/' element={<EventsPage />}/>
        <Route path='Innovations/' element={<InnovationsPage />}/>
        <Route path='Blogs/' element={<BlogsPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
