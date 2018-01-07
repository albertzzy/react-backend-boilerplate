import { createStore, applyMiddleware } from 'redux';
// import {routerReducer, routerMiddleware} from 'react-router-redux';
// import { browserHistory } from 'react-router';
// const middleware = routerMiddleware(browserHistory)

import createSagaMiddleware  from 'redux-saga';

import rootReducers from '../reducers';
import {rootSaga} from '../sagas';


// const initialState = {};

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers ,
    // initialState,
    applyMiddleware(sagaMiddleware)
    
)

sagaMiddleware.run(rootSaga)

export default store;