import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AvatarProvider } from './context/AvatarContext';
import { BizBucksProvider } from './context/BizBucksContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BizBucksProvider>
      <AvatarProvider>
        <App />
      </AvatarProvider>
    </BizBucksProvider>
  </React.StrictMode>
);
