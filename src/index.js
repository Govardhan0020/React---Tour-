import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from "./Context/Auth"
import TourContext from './Context/TourContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <TourContext>
    <AuthContext>
      <App />
    </AuthContext>
  </TourContext>

);

