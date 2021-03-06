import React from 'react';
import ReactDOM from 'react-dom';
import { setup } from 'twind';
import { aspectRatio } from '@twind/aspect-ratio';

import App from './App';

import 'twind/shim';
import './tailwind.css';

setup({
  darkMode: 'class',
  plugins: {
    aspect: aspectRatio,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
