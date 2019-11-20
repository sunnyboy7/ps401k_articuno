import React from 'react';
import Header from '../../components/Header';
import Home from '../../components/Home';
import style from './style.scss';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bodyText: 'Welcome to PS401K',
      headerText: 'PS401k',
    };
  }

  render() {
    const { bodyText, headerText } = this.state;
    return (
      <div className={style.mainBody}>
        <Header text={headerText} />
        <Home text={bodyText} />
      </div>
    );
  }
}

export default App;
