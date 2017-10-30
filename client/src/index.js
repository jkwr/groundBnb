import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes.js'
import Houses from "./components/Houses";
import HousesContainer from './containers/HousesContainer'

ReactDOM.render((
	<App/>), document.getElementById('root'));
// registerServiceWorker();


//  ReactDOM.render((
// 	<Router routes/>
// 	), document.getElementById('root'));
// registerServiceWorker();