import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        {/* The Header is placed outside the Routes to ensure it's always visible */}
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
