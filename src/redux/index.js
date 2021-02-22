import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';
import rootSaga from '../sagas';
 
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
