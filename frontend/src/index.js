import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css'
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers';
import axios from 'axios'

const store = createStore(reducer)

axios.defaults.baseURL='http://localhost:8080'

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
