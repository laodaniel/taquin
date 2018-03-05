import React, {Component} from 'react';
import style from './board.css';

const PIECES_COUNT = 16;
const COLUMNS_COUNT = Math.sqrt(PIECES_COUNT);

class Board extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      '--columns-count',
      COLUMNS_COUNT,
    );
  }

  render() {
    return (
      <section className={style.container}>
        {Array.from(Array(PIECES_COUNT).keys()).map((piece, index) => (
          <div>{index}</div>
        ))}
      </section>
    );
  }
}

export default Board;
