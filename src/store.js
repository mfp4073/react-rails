import { createStore } from 'redux';

const loadInitialData = () => {
  return {
    type: 'LOAD_INITIAL_DATA',
  };
};

const reducer = (initialState = {test: 42}, action) => {
  let newState = {...initialState};
  newState.reduced = true;
  return newState;
};

const store = createStore(reducer);

store.dispatch(loadInitialData());

console.log(store.getState());
