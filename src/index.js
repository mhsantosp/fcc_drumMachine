import React from 'react';
import ReactDOM from 'react-dom';
import DrumMachine from './Components/DrumMachine';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>,
  document.getElementById("drum-machine")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
