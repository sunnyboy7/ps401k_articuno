import React from 'react';
import { Link } from 'react-router-dom';
import valuationsListLogo from '../../assets/images/Valuations.png';
import createValuationsLogo from '../../assets/images/CreatValuations.png';

class Valuations extends React.PureComponent {
  render() {
    return (
      <div className="cards">
        <span className="card-header-title">Valuations</span>
        <div className="card-tab">
          <div className="card">
            <div className="card-body">
              <Link to="/ValuationMaintenance">
                <img src={valuationsListLogo} className="card-img-top" alt="" />
                <p className="card-text employees-list">Valuations List</p>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={createValuationsLogo} className="card-img-top" alt="" />
              <p className="card-text balances-edit">Create Valuations</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Valuations;
