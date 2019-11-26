import React from 'react';
import Employees from '../Employees';
import Valuations from '../Valuations';
import Statements from '../Statements';
import Withdrawals from '../Withdrawals';
import 'bootstrap/dist/css/bootstrap.min.css';

class RetirementPlan extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: '401K',
    };
  }

  render() {
    const { type } = this.state;
    return (
      <div className="retirementPlan">
        <div className="top-div">
          <Employees type={type} />
          <Valuations />
          <Statements />
        </div>
        <div className="bottom-div">
          <Withdrawals type={type} />
        </div>
      </div>
    );
  }
}
export default RetirementPlan;
