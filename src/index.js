import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';//idhar import kar liya


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')//render kar ke sara element app se import kar ke iss element mene dal dega 
  
);

