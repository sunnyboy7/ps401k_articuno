import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class Home extends React.PureComponent {
  render() {
    const { text } = this.props;
    return (
      <div className={style.bodyContent}>
        <p>{text}</p>
      </div>
    );
  }
}

Home.propTypes = {
  text: PropTypes.string
};
Home.defaultProps = {
  text: ''
};

export default Home;
