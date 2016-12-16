import { createStore } from 'redux';

import appReducer from './reducers';

const initialState = {
  products: [],
};

export default () => {
  const store = createStore(
    appReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
