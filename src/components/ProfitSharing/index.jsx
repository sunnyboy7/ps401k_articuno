import React from 'react';
import Employees from '../Employees';
import Valuations from '../Valuation';
import Statements from '../Statements';
import Withdrawals from '../Withdrawals';

class ProfitSharing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ProfitSharing'
    };
  }

  render() {
    const { type } = this.state;
    return (
      <div className="profitSharing">
        <div className="top-div">
          <div className="col-md-12 row">
            <div className="col-md-8">
              <Employees type={type} />
              <Valuations />
              <Statements />
            </div>
          </div>
        </div>
        <div className="bottom-div">
          <Withdrawals type={type} />
        </div>
      </div>
    );
  }
}
export default ProfitSharing;
