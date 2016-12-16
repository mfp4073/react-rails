import React, { Component, PropTypes } from 'react';
import PlanList from './PlanList';

class Product extends Component {
  handleClick = () => {
    this.props.markProductActive(this.props.id);
  };

  render() {
    return (
      <li>
        <div className="product-name"
          onClick={this.handleClick}>
          <strong>{this.props.name}</strong>
        </div>
        <div className="product-description">
          {this.props.description}
        </div>
        {this.props.isProductActive ? <PlanList plans={this.props.plans} /> : null}
      </li>
    );
  }
}

Product.propTypes = {
  children: PropTypes.any,
};

export default Product;
