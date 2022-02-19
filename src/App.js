import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const switchMode = () => {
    if (mode === "dark") {
      setmode("light");
      
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode enabled");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("success", "Dark mode enabled");
    }
  }

  const [alert, setalert] = useState(null);

  const showAlert = (type, message) => {
    setalert({
      message: message,
      type: type
    })
    setInterval(() => {
      setalert(null);
    }, 2500);
  }
  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} switchMode={switchMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}>
            {/* <About /> */}
          </Route>

          <Route exact path="/" element={<TextForm mode={mode} alert={alert} showAlert={showAlert} />}>
            {/* <TextForm mode={mode} alert={alert} showAlert={showAlert} /> */}
          </Route>
        </Routes>

      </Router>
    </>

  );
}

export default App;
