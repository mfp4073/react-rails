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
        type: 'RECEIVE_PRODUCTS_DATA',
        data: data.data.products,
      });
    });
  };
};
