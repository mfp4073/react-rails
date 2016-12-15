import React, { PropTypes } from 'react';
import { globalCellStyle, cellState } from '../styles/game';

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
  onClick = () => {
    this.props.recordGuess(
      this.props.id, this.props.status === 'active' ? 'correct' : 'wrong'
    );
  };

  cellStyle() {

    let status = this.props.status;
    let css = globalCellStyle;

    if (this.props.gameState === 'pick' && this.props.status === 'active') {
      status = '';
    }

    return { ...css, ...cellState[status]};
  }

  render() {
    return (
      <div className="cell"
         style={this.cellStyle()}
         onClick={this.onClick}>
        {this.props.id}
      </div>
    );
  }
}

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  recordGuess: PropTypes.func,
  gameState: PropTypes.string,
};

export default Cell;
