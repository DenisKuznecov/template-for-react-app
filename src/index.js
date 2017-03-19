import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './configureStore'
import Layout from './Containers/Layout/Layout'

import '../node_modules/reset.css/reset.css'
import './index.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Layout}/>
        </Router>
    </Provider>,
  document.getElementById('root')
);
