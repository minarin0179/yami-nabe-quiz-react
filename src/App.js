import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import QuizPage from './components/QuizPage';
import HomePage from './components/HomePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eat" element={<QuizPage />} />
        {/* <Route path="/put" element={<QuizPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
