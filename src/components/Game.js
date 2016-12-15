import React from 'react';
import axios from 'axios';

import Row from './Row';
import Cell from './Cell';

import config from '../config';

class Game extends React.Component {
  state = { gridData: [] };
  challengeCells = { '0-0': true, '1-1' : true, '4-4': true };

  // fetch the data, http://server/api/index
  componentDidMount() {
    axios.get(`${config.serverUrl}/api/index`)
      .then(resp => {
        this.setState({gridData: resp.data.grid});
      });
  }

  render() {
    const grid = this.state.gridData.map((row, index) => {
      return (
        <Row key={index}>
          {row.map(cellId => <Cell id={cellId} key={cellId} />)}
        </Row>
      );
    });

    return (
      <div>
        {this.state.test}
        {grid}
      </div>
    );
  }
}

export default Game;
