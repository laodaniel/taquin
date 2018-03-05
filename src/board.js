import React, {Component} from 'react';
import styles from './styles.css';
import Piece from './piece';

const PIECES_COUNT = 25;
const COLUMNS_COUNT = Math.sqrt(PIECES_COUNT);
const ROW_HEIGHT = `${100 / COLUMNS_COUNT}vw`;

const board = Array.from(Array(PIECES_COUNT).keys());
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
    this.swapTiles(0, value);
  };

  swapTiles = (value1, value2) => {
    const shuffledBoard = [...this.state.shuffledBoard];
    shuffledBoard[this.getTileIndex(value1)] = value2;
    shuffledBoard[this.getTileIndex(value2)] = value1;
    this.setState({shuffledBoard});
  };

  getTileIndex = tileValue =>
    this.state.shuffledBoard.findIndex(number => number === tileValue);

  render() {
    const {shuffledBoard} = this.state;
    return (
      <section className={styles.board}>
        {shuffledBoard.map((piece, index) => (
          <Piece key={index} number={piece} onClick={this.onTileClick} />
        ))}
      </section>
    );
  }
}

export default Board;
