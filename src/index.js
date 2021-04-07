import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/Store'
import "../node_modules/bootstrap/dist/css/bootstrap.css";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
document.getElementById("root"));