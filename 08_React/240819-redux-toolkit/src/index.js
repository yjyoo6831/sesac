import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// #3. Store 연결
root.render(
  
    <Provider store={store}>
      <App />
    </Provider>
);
