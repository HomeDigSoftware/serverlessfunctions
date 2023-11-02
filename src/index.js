import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import AppV2 from './AppV2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppV2 />
    {/* <App /> */}
  </React.StrictMode>
);


