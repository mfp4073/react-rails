import React, { Component, PropTypes } from 'react';
import Product from './Product';

import Form from './Form.js';
import storeConfig from '../store';
import * as actions from '../actions/dataActions';

class Products extends Component {
  constructor(props) {
    super(props);
    this.store = storeConfig();
    this.state = this.store.getState();
  }
  componentDidMount() {
    this.store.subscribe(() => {
      this.setState(this.store.getState());
    });

    this.store.dispatch(actions.fetchProducts());
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
      this.store.dispatch(actions.maybeFetchPlansData(nextState.activeProductId));
    }
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }
  //
  markProductActive = (productId) => {
    this.store.dispatch(actions.markProductActive(productId));
  }

  render() {
    return (
      <div>
        <Form />
        <ul>
          {Object.entries(this.state.products).map(([productId, product])=>
            <Product key={productId}
              {...product}
              markProductActive={this.markProductActive}
              isProductActive={this.state.activeProductId === productId}
            />
          )}
        </ul>
      </div>
    );
  }
}

Products.propTypes = {
  children: PropTypes.any,
};

export default Products;
