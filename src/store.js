import { createStore } from 'redux';

import appReducer from './reducers';

const initialState = {
  products: [],
};

export default () => {
  const store = createStore(appReducer, initialState);

  return store;
};
