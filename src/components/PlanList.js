import React, { Component, PropTypes } from 'react';

class PlanList extends Component {
  render() {
    return (
      <ul>
        {this.props.plans.map(plan =>
          <li key={plan.name}>
            {plan.name}
          </li>
        )}
      </ul>
    );
  }
}

PlanList.propTypes = {
  plans: PropTypes.array,
};

PlanList.defaultProps = {
  plans: []
};

export default PlanList;
