const appReducer = (state = {}, action) => {
  if (action.type === 'DECREMENT_TEST') {
    return {
      ...state,
      test: state.test - 1
    };
  }
  return state;
};

export default appReducer;
