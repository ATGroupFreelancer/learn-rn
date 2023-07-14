import {applyMiddleware, createStore} from "redux";
import reducers from "../reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../saga/sagas";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)