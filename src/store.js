import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import appReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  products: [],
};

export default () => {
  const store = createStore(
    appReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk)),
  );

  return store;
};
