import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function AppProviders({ store }) {
  const supportsHistory = 'pushState' in window.history
  return (
    <Provider store={store}>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

export default AppProviders;