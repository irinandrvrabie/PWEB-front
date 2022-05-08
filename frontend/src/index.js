import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Auth0Provider
         domain="dev-b49w2j0q.us.auth0.com"
         clientId="Oh0GqzMz3r9gqAATpMwmqw8y2ZkO9M1L"
         redirectUri="http://localhost:3000/employee/alljobs"
        // audience={authSettings.audience}
       >
         <App />
       </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
