import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './Pages/History';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"

// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
    <HashRouter history={history}>
        <App />
    </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
