import { configureMockStore }from 'redux'
import createSagaMiddleware from 'redux-saga';
import expect from 'expect' // уже знакомый нам expect
import fetchMock from 'fetch-mock' // библиотека для "мока" асинхронных запросов

import * as t from './products' // экшен-тайпы

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore(sagaMiddleware);

describe('AsyncProductsRequest', () => {
    it('seome', ()=>{
        console.log(mockStore);
        expect()
    })
});

