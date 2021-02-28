import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './sagas/root';

export const sagaMiddlewere = createSagaMiddleware();
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddlewere));

export const store = createStore(rootReducer, composedEnhancers);
sagaMiddlewere.run(rootSaga);
