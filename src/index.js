import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/animate.css"
import "./assets/css/styles.css"

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('application')
);
