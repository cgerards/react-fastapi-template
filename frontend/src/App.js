import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState } from 'react';

import { Button } from 'react-bootstrap'

import api from './api';

function App() {

  const [message, setMessage] = useState("");


  const handleClick = async () => {
    const response = await api.get('/message/response');
    setMessage(response.data);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button onClick={handleClick}>Show FastAPI message</Button>
        <p>FastAPI says: {message}</p>
      </header>
    </div>
  );
}

export default App;
