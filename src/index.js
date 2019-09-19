import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './AppContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {reducer, mapDispatchToProps, mapStateToProps, watchFetchProducts} from './ducks/products'
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

// Action Creators

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchProducts);

ReactDOM.render(
    <Provider store={store} >
        <ConnectedApp />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
