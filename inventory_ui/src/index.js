import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './themes';
import App from './App';

import './App.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
</ThemeProvider>,
  document.getElementById('root')
);
