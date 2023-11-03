import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OrderingProvider from './contexts/OrderingProvider';
import GroupingProvider from './contexts/GroupingProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderingProvider>
      <GroupingProvider>
        <App />
      </GroupingProvider>
    </OrderingProvider>
  </React.StrictMode>
);

