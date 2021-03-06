import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Provider } from 'mobx-react';
import './index.css';
import App from './components/App';
import store from './stores';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider { ...store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
