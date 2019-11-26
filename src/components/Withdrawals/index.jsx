import React from 'react';
import PropTypes from 'prop-types';
import withdrawalsListLogo from '../../assets/images/Withdrawals.png';
import calculateEligibilityLogo from '../../assets/images/CalculateEligibility.png';
import separatedWithdrawalLogo from '../../assets/images/SeparatedWithdrawal.png';
import interimWithdrawalLogo from '../../assets/images/InterimWithdrawal.png';

class Withdrawals extends React.PureComponent {
  render() {
    const {
      type,
    } = this.props;
    return (
      <div className="cards">
        <span className="card-header-title">Withdrawals</span>
        <div className="card-tab card-tab-huge">
          <div className="card">
            <div className="card-body">
              <img src={withdrawalsListLogo} className="card-img-top" alt="" />
              <p className="card-text employees-list">Withdrawals List</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={calculateEligibilityLogo} className="card-img-top" alt="" />
              <p className="card-text balances-edit">Calculate Eligibility</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={separatedWithdrawalLogo} className="card-img-top" alt="" />
              <p className="card-text balances-edit">Create Separated Withdrawal</p>
            </div>
          </div>
          {type === 'ProfitSharing'
           && (
           <div className="card">
             <div className="card-body">
               <img src={interimWithdrawalLogo} className="card-img-top" alt="" />
               <p className="card-text balances-edit">Create Interim Withdrawal</p>
             </div>
           </div>
           )
      }
        </div>
      </div>
    );
  }
}

Withdrawals.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Withdrawals;
