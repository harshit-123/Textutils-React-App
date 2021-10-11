// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#17294a';
      showAlert("Dark Mode Activated", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <Textform showAlert={showAlert} mode={mode} heading="Play With Your Words-Word Counter" />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
