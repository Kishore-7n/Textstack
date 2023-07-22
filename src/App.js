
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);

  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert("Dark mode enabled", "success");
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode enabled", "success");
    }
  }
  return (
  <div className="App">
    <Router>
        <Navbar title="Home" abouttext="About us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<Text heading="Enter the text here..." mode={mode} showalert={showalert} />}/>
          </Routes>
        </div>
    </Router >
  </div>
  );
}

export default App;

