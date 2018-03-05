import React, {Component} from 'react';
import styles from './styles.css';
import Piece from './piece';

const PIECES_COUNT = 25;
const COLUMNS_COUNT = Math.sqrt(PIECES_COUNT);
const ROW_HEIGHT = `${100/COLUMNS_COUNT}vw`;

class Board extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      '--columns-count',
      COLUMNS_COUNT,
    );
    document.documentElement.style.setProperty(
      '--row-height',
      ROW_HEIGHT,
    );
  }

  render() {
    return (
      <section className={styles.board}>
        {Array.from(Array(PIECES_COUNT).keys()).map((piece, index) => (
          <Piece key={index} number={index} />
        ))}
      </section>
    );
  }
}

export default Board;
