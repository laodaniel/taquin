import React, {Component} from 'react';
import styles from './styles.css';
import Tile from './tile';

const TILES_COUNT = 16;
const COLUMNS_COUNT = Math.sqrt(TILES_COUNT);
const ROW_HEIGHT = `${100 / COLUMNS_COUNT}vw`;
const HOLE_VALUE = 0;

const board = Array.from(Array(TILES_COUNT).keys());

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledBoard: this.shuffleBoard(),
      isSolved: false,
    };
  }

  componentDidMount() {
    document.documentElement.style.setProperty(
      '--columns-count',
      COLUMNS_COUNT,
    );
    document.documentElement.style.setProperty('--row-height', ROW_HEIGHT);
  }

  shuffleBoard = () => {
    const shuffledBoard = [...board];
    shuffledBoard.sort(() => Math.random() - 0.5);
    return shuffledBoard;
  };

  onTileClick = event => {
    const value = parseInt(event.currentTarget.innerHTML, 10);
    if (
      this.isHoleAtTheLeft(value) ||
      this.isHoleAtTheRight(value) ||
      this.isHoleAbove(value) ||
      this.isHoleBelow(value)
    ) {
      this.swapTiles(HOLE_VALUE, value);
    }
  };

  isHoleAtTheLeft = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.isHole(selectedTileIndex - 1);
  };

  isHoleAtTheRight = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.isHole(selectedTileIndex + 1);
  };

  isHoleAbove = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.isHole(selectedTileIndex + COLUMNS_COUNT);
  };

  isHoleBelow = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.isHole(selectedTileIndex - COLUMNS_COUNT);
  };

  isHole = value => {
    return this.state.shuffledBoard[value] === HOLE_VALUE;
  };

  swapTiles = (value1, value2) => {
    const shuffledBoard = [...this.state.shuffledBoard];
    shuffledBoard[this.getTileIndex(value1)] = value2;
    shuffledBoard[this.getTileIndex(value2)] = value1;
    this.setState({shuffledBoard});
    this.checkSolvedState();
  };

  checkSolvedState = () => {
    if (JSON.stringify(this.state.shuffledBoard) === JSON.stringify(board)) {
      this.setState({isSolved: true});
    }
  };

  restart = () => {
    this.setState({isSolved: false, shuffledBoard: this.shuffleBoard()});
  };

  getTileIndex = tileValue =>
    this.state.shuffledBoard.findIndex(value => value === tileValue);

  render() {
    const {shuffledBoard, isSolved} = this.state;
    if (isSolved) {
      return (
        <section>
          <h1>You win!</h1>
          <button onClick={this.restart}>Restart</button>
        </section>
      );
    }
    return (
      <section className={styles.board}>
        {shuffledBoard.map(tile => (
          <Tile key={tile} value={tile} onClick={this.onTileClick} />
        ))}
      </section>
    );
  }
}

export default Board;
