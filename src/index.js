import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // index.html  -> noscript  -> root      
// Most important line bcz iske bina project kisi kaam ka nahi hai....
root.render(
  <React.StrictMode>
    <App />  {/* app component jab bhi ise likhenge tab tab app.js wala */}
    {/* <App />
    <App />
    <App /> */}
  </React.StrictMode>
);

