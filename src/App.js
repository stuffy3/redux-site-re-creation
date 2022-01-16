import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';


function App() {
  return (
    <div className='documentBody'>
      <Router>
        <NavBar />
      </Router>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
