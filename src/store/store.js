import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userDataReducer from '../reducer/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      userDataReducer: userDataReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
