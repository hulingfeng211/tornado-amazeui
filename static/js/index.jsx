import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
//import FullScreen from '../lib/FullScreen';
import routes from './routes';

const store = configureStore(browserHistory)

const history = syncHistoryWithStore(browserHistory,store)

 

ReactDOM.render(( <Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider> ),document.getElementById('root'));

