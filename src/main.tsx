import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@/App'
import { Provider } from 'react-redux'
import store from '@/store'
// import i18n (needs to be bundled ;)) 
import './i18n';
import React from 'react'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
