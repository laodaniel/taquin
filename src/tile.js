import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const HOLE_VALUE = 0;

class Tile extends Component {
  static defaultProps = {
    value: HOLE_VALUE,
  };

  static propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const {value, onClick} = this.props;
    const className = value === HOLE_VALUE ? styles.tile__hole : styles.tile;
    return (
      <div onClick={onClick} data-index={1} className={className}>
        {value}
      </div>
    );
  }
}

export default Tile;
