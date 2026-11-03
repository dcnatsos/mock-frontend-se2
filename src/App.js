import React, { useState } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState('(click the button)');
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

  const handleClick = async () => {
    try {
      const res = await fetch(BACKEND_URL + '/api/hello');
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Frontend ↔ Backend demo</h1>
        <p>This page will call the backend on Render and show the JSON response.</p>
        <button id="btn" onClick={handleClick}>Call backend</button>
        <pre id="out">{response}</pre>
      </div>
    </div>
  );
}

export default App;

