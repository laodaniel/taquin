import React, {Component} from 'react';
import styles from './styles.css';
import Tile from './tile';

const TILES_COUNT = 25;
const COLUMNS_COUNT = Math.sqrt(TILES_COUNT);
const ROW_HEIGHT = `${100 / COLUMNS_COUNT}vw`;

const board = Array.from(Array(TILES_COUNT).keys());
const shuffledBoard = board.sort(() => Math.random() - 0.5);

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledBoard,
    };
  }

  componentDidMount() {
    document.documentElement.style.setProperty(
      '--columns-count',
      COLUMNS_COUNT,
    );
    document.documentElement.style.setProperty('--row-height', ROW_HEIGHT);
  }

  onTileClick = event => {
    const value = parseInt(event.currentTarget.innerHTML, 10);
    if (
      this.isHoleAtTheLeft(value) ||
      this.isHoleAtTheRight(value) ||
      this.isHoleAbove(value) ||
      this.isHoleBelow(value)
    ) {
      this.swapTiles(0, value);
    }
  };

  isHoleAtTheLeft = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.state.shuffledBoard[selectedTileIndex - 1] === 0;
  };

  isHoleAtTheRight = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.state.shuffledBoard[selectedTileIndex + 1] === 0;
  };

  isHoleAbove = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.state.shuffledBoard[selectedTileIndex + COLUMNS_COUNT] === 0;
  };

  isHoleBelow = value => {
    const selectedTileIndex = this.getTileIndex(value);
    return this.state.shuffledBoard[selectedTileIndex - COLUMNS_COUNT] === 0;
  };

  swapTiles = (value1, value2) => {
    const shuffledBoard = [...this.state.shuffledBoard];
    shuffledBoard[this.getTileIndex(value1)] = value2;
    shuffledBoard[this.getTileIndex(value2)] = value1;
    this.setState({shuffledBoard});
  };

  getTileIndex = tileValue =>
    this.state.shuffledBoard.findIndex(value => value === tileValue);

  render() {
    const {shuffledBoard} = this.state;
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
