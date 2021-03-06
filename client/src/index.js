import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './containers/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, //reducers
    { auth: { authenticated: localStorage.getItem('token') }},//pre loaded state u want
    composeEnhancers(applyMiddleware(reduxThunk)) //middlewares you want set up
);


ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
,
 document.getElementById('root'));
