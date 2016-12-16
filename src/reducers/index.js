const appReducer = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_DATA':
    return {
      ...state,
      products: action.data,
    };
  default:
    return state;
  }
};

export default appReducer;
