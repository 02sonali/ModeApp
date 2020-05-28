import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //a middleware that warns us if we accidently mutate redux state
import {initSagas} from './initSagas';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //it helps in redux dev tool debugging
    const sagaMiddleware = createSagaMiddleware();
   
    const store =  createStore(rootReducer, 
        initialState, 
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware))
    );
    initSagas(sagaMiddleware);
    return store;
}