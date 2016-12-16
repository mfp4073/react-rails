import React, { Component, PropTypes } from 'react';
import Product from './Product';

import storeConfig from '../store';

class Products extends Component {
  constructor(props) {
    super(props);
    this.store = storeConfig();
    this.state = {
      ...this.store.getState(),
      products: [],
      activeProductId: null,
    };
    console.log(this.store.getState());
    setTimeout(() => {
      this.store.dispatch({
        type: 'DECREMENT_TEST'
      });
    }, 1000);
  }
  componentDidMount() {
    this.store.subscribe(() => {
      this.setState(this.store.getState());
    });
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
      this.setState({
        products: data.data.products
      });
    });
  }

  maybeFetchPlansData = (productId) => {
    const product = this.state.products.find(product => product.id === productId);
    if (product.plans) {
      return;
    }

    const variables = JSON.stringify({
      "sku": `${productId}`
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
      let products = this.state.products;
      const productIndex = this.state.products.findIndex(product => product.id === productId);
      products[productIndex] = {
        ...product,
        plans: data.data.product.plans
      };
      this.setState({
        products
      });

    });
  }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }
  //
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }
  //
  componentWillUpdate(nextProp, nextState) {
    if (nextState.activeProductId !== this.state.activeProductId) {
      this.maybeFetchPlansData(nextState.activeProductId);
    }
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }
  //
  markProductActive = (productId) => {
    this.setState({
      activeProductId: productId
    });
  }

  render() {
    return (
      <ul>
        {this.state.test}
        {this.state.products.map(product =>
          <Product key={product.id} {...product} markProductActive={this.markProductActive} />
        )}
      </ul>
    );
  }
}

Products.propTypes = {
  children: PropTypes.any,
};

export default Products;
