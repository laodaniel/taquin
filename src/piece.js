import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Piece extends Component {
  static defaultProps = {
    number: 0,
  };

  static propTypes = {
    number: PropTypes.number.isRequired,
  };

  render() {
    const {number} = this.props;
    return <div>{number}</div>;
  }
}

export default Piece;
