import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from "react"
import Error404 from './views/error404/component';
import Layout from "./layout/component";

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);