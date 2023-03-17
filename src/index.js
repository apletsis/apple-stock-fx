import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppleStockPrice from './components/AppleStockPrice';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <AppleStockPrice />
  </ThemeProvider>,
);
