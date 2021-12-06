import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux'
import Auth0ProviderWithHistory from './authorization/useAuth';


ReactDOM.render(
  <>
    <React.StrictMode>

      <BrowserRouter>
      <Auth0ProviderWithHistory>
         <Provider store={store}>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </Provider>
        </Auth0ProviderWithHistory>
      </BrowserRouter>

    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
