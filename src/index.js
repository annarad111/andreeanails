import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
import App from '../src/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);