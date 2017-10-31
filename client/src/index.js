import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes.js'
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { CookiesProvider, withCookies, Cookies, cookie } from 'react-cookie'
import ReactGA from 'react-ga';
import { AUTH_USER } from './actions/types';


ReactGA.initialize('UA-000000-01');

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// const token = cookie.load('token');

// if (token) {
//   // Update application state. User has token and is probably authenticated
//   store.dispatch({ type: AUTH_USER });
// }


ReactDOM.render(
<Provider store={store}>
	<App/>
</Provider>
, document.getElementById('root'));
// registerServiceWorker();


//  ReactDOM.render((
// 	<Router routes/>
// 	), document.getElementById('root'));
// registerServiceWorker();