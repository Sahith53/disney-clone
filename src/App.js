import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {


  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
