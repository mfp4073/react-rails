import { createStore, combineReducers } from 'redux';

const loadInitialData = () => {
  return {
    type: 'LOAD_INITIAL_DATA',
  };
};

const decrementTest = () => {
  return {
    type: 'DECREMENT_TEST'
  };
};

const setTestTo = (value) => {
  return {
    type: 'SET_TEST_TO',
    value
  };
};

const unReduce = () => {
  return {
    type: 'UNREDUCE',
  };
};

const testReducer = (initialState = 42, action) => {
  switch (action.type) {
  case 'SET_TEST_TO':
    return action.value
  case 'DECREMENT_TEST':
    return initialState - 1;
  default:
    return initialState;
  }
};

const reducedReducer = (initialState = true, action) => {
  switch (action.type) {
  case 'UNREDUCE':
    return false;
  default:
    return initialState;
  }
};


const appReducer = combineReducers({
  test: testReducer,
  reduced: reducedReducer
});

const store = createStore(appReducer);

store.dispatch(loadInitialData());

if (process.argv[2] === 'unreduce') {
  store.dispatch(unReduce());
}

store.dispatch(decrementTest());
store.dispatch(decrementTest());
store.dispatch(decrementTest());
store.dispatch(decrementTest());

store.dispatch(setTestTo(50));

const state = store.getState();

console.log('STATE =', state);

console.assert(state.reduced === false);
console.assert(state.test === 50);
