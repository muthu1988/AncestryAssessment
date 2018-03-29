import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import commonReducer from './reducer/common';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const store = createStore(commonReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
