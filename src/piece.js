import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class Piece extends Component {
  static defaultProps = {
    number: 0,
  };

  static propTypes = {
    number: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const {number, onClick} = this.props;
    const className = number === 0 ? styles.piece__hole : styles.piece;
    return (
      <div onClick={onClick} data-index={1} className={className}>
        {number}
      </div>
    );
  }
}

export default Piece;
