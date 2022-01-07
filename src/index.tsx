import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <ThemeProvider theme={myTheme}>
            <App />
         </ThemeProvider>
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);

reportWebVitals();
