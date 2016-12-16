import types from './actionTypes';

export const fetchProducts = () => {
  return (dispatch) => {
    fetch(`https://lcgraph.herokuapp.com/graphql?query=
      {
        products {
          id
          name
          description
        }
      }
    `).then(resp => resp.json())
    .then(data => {
      dispatch({
        type: types.RECEIVE_PRODUCTS_DATA,
        data: data.data.products,
      });
    });
  };
};

export const maybeFetchPlansData = (productId) => {
  return (dispatch) => {
    // const product = this.state.products[productId];
    // if (product.plans) {
    //   return;
    // }

    const variables = JSON.stringify({
      "sku": productId
    });

    fetch(`https://lcgraph.herokuapp.com/graphql?variables=${variables}&query=
      query OneProductPlans($sku: String!) {
        product(sku: $sku) {
          plans {
            name
            cost
          }
        }
      }
    `).then(resp => resp.json())
    .then(data => {
      dispatch({
        type: types.RECEIVE_ONE_PRODUCT_PLANS,
        plans: data.data.product.plans,
        productId,
      });
    });
  };
};
