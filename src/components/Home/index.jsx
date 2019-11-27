import React, { Fragment } from 'react';
import ProfitSharing from '../ProfitSharing';
import RetirementPlan from '../RetirementPlans';
import Header from '../Header';

class Home extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="mainBody">
          <div className="ProfitSharingDiv">
            <div className="title">Profit Sharing</div>
            <ProfitSharing />
          </div>
          <div className="RetirementPlanDiv">
            <div className="title">401K</div>
            <RetirementPlan />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
