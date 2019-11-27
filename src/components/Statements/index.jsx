import React from 'react';
import statementsLogo from '../../assets/images/Statements.png';

class Statements extends React.PureComponent {
  render() {
    return (
      <div className="cards">
        <span className="card-header-title">Statements</span>
        <div className="card-tab card-tab-tiny">
          <div className="card">
            <div className="card-body">
              <img src={statementsLogo} className="card-img-top" alt="" />
              <p className="card-text statements-list">Statements List</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Statements;
