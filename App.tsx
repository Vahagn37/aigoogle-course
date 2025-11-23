import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseExplore from './pages/CourseExplore';
import CourseDetail from './pages/CourseDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Simple state to simulate dark mode persistence if needed, 
  // currently defaults to dark via HTML class but togglable via UI in layout
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CourseExplore />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default App;