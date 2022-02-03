import React from 'react';
import ReactDOM from 'react-dom';
// import './css/App.css';
// import './css/index.css';
import './css/elementor.css';
import './css/astra.css';
// import './css/content.css';
import './css/woocommerce.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "reactstrap";
import App from './App';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';


const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
