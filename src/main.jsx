import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Appw from './Appw.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Appw />
  </StrictMode>
);
