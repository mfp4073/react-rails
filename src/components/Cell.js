import React, { PropTypes } from 'react';
import { cell, cellState } from '../styles/game';

// const Cell = (props) => {
//   const onClick = () => console.log(props.id);
//   return (
//     <div className="cell" style={cell} onClick={onClick}>
//       {props.id}
//     </div>
//   );
// };

class Cell extends React.Component {
  // state = { cellStatus: 'correct' };
  onClick = () => { console.info(this.props.id); };

  render() {
    return (
      <div className="cell"
         style={{ ...cell, ...cellState[this.props.status] }}
         onClick={this.onClick}>
        {this.props.id}
      </div>
    );
  }
}

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};

export default Cell;
