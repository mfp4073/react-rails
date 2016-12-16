import types from '../actions/actionTypes';

const appReducer = (state = {}, action) => {
  switch (action.type) {
  case types.RECEIVE_PRODUCTS_DATA:
    return {
      ...state,
      products: action.data.reduce((acc, e) => {
        acc[e.id] = e;
        return acc;
      }, {}),
    };
  default:
    return state;
  }
};

export default appReducer;
