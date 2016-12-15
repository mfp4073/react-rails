import React, { Component, PropTypes } from 'react';

class Products extends Component {
  state = {
    products: [],
    activeProductId: null,
  }
  componentDidMount() {
    fetch(`https://lcgraph.herokuapp.com/graphql?query=
      {
        products {
          id
          name
          description
          plans {
           name
           cost
          }
        }
      }
    `).then(resp => resp.json())
    .then(data => {
      this.setState({
        products: data.data.products
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.products.map(product =>
          <div key={product.name}>
            <div className="product-name">
              {product.name}
            </div>
            <div className="product-description">
              {product.description}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Products.propTypes = {
  children: PropTypes.any,
};

export default Products;
