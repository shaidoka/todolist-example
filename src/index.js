import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Project from './Project/Project'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode >
    <Router>
    <div className="App">
        <Route path="/" exact component={Project} />
        <Route path='/project/:id'  component={App} />
    </div>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
