import React from 'react';
import axios from 'axios';

import Row from './Row';
import Cell from './Cell';

import config from '../config';

class Game extends React.Component {
  state = {
    gridData: [],
    challengeCells: {},
    guesses: {},
    gameState: 'challenge',
  };

  recordGuess = (cellId, guess) => {
    this.setState((prevState) => {
      return {
        guesses: {
          ...prevState.guesses,
          [cellId]: guess,
        }
      };
    });

  };

  componentDidMount() {
    axios.get(`${config.serverUrl}/api/index`)
      .then(resp => {
        this.setState(resp.data, () => {
          this.timerId = setTimeout(() => {
            this.setState({
              gameState: 'pick'
            });
          }, 5000);
        });
      });
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const grid = this.state.gridData.map((row, index) => {
      return (
        <Row key={index}>
          {row.map(cellId => {
            const isActive = this.state.challengeCells[cellId] ? 'active' : '';
            const isCorrect = this.state.guesses[cellId];
            const status = isCorrect !== undefined ? isCorrect : isActive;
            return (
              <Cell id={cellId} key={cellId}
                gameState={this.state.gameState}
                status={status} recordGuess={this.recordGuess} />
            );
          })}
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
