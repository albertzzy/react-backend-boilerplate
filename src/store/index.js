import { createStore, applyMiddleware } from 'redux';
// import {routerReducer, routerMiddleware} from 'react-router-redux';
// import { browserHistory } from 'react-router';
// const middleware = routerMiddleware(browserHistory)

import rootReducers from '../reducers'



// const initialState = {};



const store = createStore(
    rootReducers ,
    // initialState,
    // applyMiddleware(middleware)
    
)

export default store;