import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router,hashHistory  } from 'react-router';
import { AppContainer } from 'react-hot-loader';

// import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import rootRoutes from './routes/rootRoutes';
// import 'antd/dist/antd.css';

// const history = syncHistoryWithStore(browserHistory, store)





render(
    <Provider store={store}>
        <Router routes={rootRoutes}  history={hashHistory}/>
    </Provider>
    ,document.getElementById('app'))



// hot reloader
if(DEV){

    if (module.hot) {
            module.hot.accept('./routes/rootRoutes', () => {
                const nextRoutes = require('./routes/rootRoutes').default;
                render(
                    <AppContainer>
                <Provider store={store}>
                    <Router key={Math.random()} history={hashHistory} routes={nextRoutes} />
                </Provider>
            </AppContainer>,
            document.getElementById('app'));
        });
    }
}