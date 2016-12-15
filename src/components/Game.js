import React from 'react';

import Row from './Row';
import Cell from './Cell';

// const challengeCells = ['0-0', '1-1'];

// [
//   ['0-0', '0-1'],
//   ['1-0', '1-1']
// ]
//

class Game extends React.Component {
  state = {test: 42};
  challengeCells = { '0-0': true, '1-1' : true, '4-4': true };
  render() {
    let rows = [];
    for(let r = 0; r<5; r++) {
      let cells = [];
      for(let c = 0; c<5; c++) {
        const cellId = `${r}-${c}`;
        const isActive = this.challengeCells[cellId];
        cells.push(<Cell status={isActive ? 'active' : ''} id={cellId} key={cellId} />);
      }
      rows.push(
        <Row className="row" key={r}>
          {cells}
        </Row>
      );
    }

    return (
      <div>
        {this.state.test}
        {rows}
      </div>
    );
  }
}

export default Game;
