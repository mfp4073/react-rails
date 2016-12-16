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
  case types.RECEIVE_ONE_PRODUCT_PLANS:
    return {
      ...state,
      products: {
        ...state.products,
        [action.productId]: {
          ...state.products[action.productId],
          plans: action.plans,
        }
      }
    };
  default:
    return state;
  }
};

export default appReducer;
