import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class Tile extends Component {
  static defaultProps = {
    value: 0,
  };

  static propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const {value, onClick} = this.props;
    const className = value === 0 ? styles.tile__hole : styles.tile;
    return (
      <div onClick={onClick} data-index={1} className={className}>
        {value}
      </div>
    );
  }
}

export default Tile;
