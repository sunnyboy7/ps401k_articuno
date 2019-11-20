import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.PureComponent {
  render() {
    const { text } = this.props;
    return (
      <div>
        <h1>{ text }</h1>
      </div>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string,
};
Header.defaultProps = {
  text: '',
};

export default Header;
