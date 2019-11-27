import React from 'react';
import Employees from '../Employees';
import Valuations from '../Valuation';
import Statements from '../Statements';
import Withdrawals from '../Withdrawals';

class RetirementPlan extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: '401K'
    };
  }

  render() {
    const { type } = this.state;
    return (
      <div className="retirementPlan">
        <div className="top-div">
          <div className="col-md-12 row">
            <div className="col-md-10">
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
export default RetirementPlan;
