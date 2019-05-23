import ReactDOM from 'react-dom';
import React from 'react';
import AppProviders from './components/root/app_providers';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', function() {
  const store = configureStore();
  ReactDOM.render(
    <AppProviders store={store} />, 
    document.getElementById('root')
  );
});