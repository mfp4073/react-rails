import { createStore } from 'redux';

const loadInitialData = () => {
  return {
    type: 'LOAD_INITIAL_DATA',
  };
};

const unReduce = () => {
  return {
    type: 'UNREDUCE',
  };
};

const reducer = (initialState = {test: 42}, action) => {
  console.log(action);
  let newState = {...initialState};
  newState.reduced = true;
  return newState;
};

const store = createStore(reducer);

store.dispatch(loadInitialData());

if (process.argv[2] === 'unreduce') {
  store.dispatch(unReduce());
}

store.dispatch(decrementTest());
store.dispatch(decrementTest());
store.dispatch(decrementTest());
store.dispatch(decrementTest());


const state = store.getState();

console.assert(state.reduced === false);
console.assert(state.test === 38);
