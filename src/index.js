import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { LoadingProvider } from './Contexts/LoadingContext';

ReactDOM.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>,
  document.getElementById('root')
);
