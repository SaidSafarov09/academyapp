import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {startAnimation} from './animation.js'

ReactDOM.render(<React.StrictMode>
      <App />
    </React.StrictMode>, document.getElementById('root'));

  window.onload = function () {
      document.body.classList.add("loaded_hiding");
      window.setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
      }, 500);
      window.setTimeout(() => {
        startAnimation();
      }, 300)
    };





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
