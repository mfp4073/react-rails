import types from '../actions/actionTypes';

const appReducer = (state = {}, action) => {
  switch (action.type) {
  case types.RECEIVE_PRODUCTS_DATA:
    return {
      ...state,
      products: action.data,
    };
  default:
    return state;
  }
};

export default appReducer;
