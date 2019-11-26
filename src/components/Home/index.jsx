import React from 'react';
import ProfitSharing from '../ProfitSharing';
import RetirementPlan from '../401K';
import style from '../../containers/App/style.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div className={style.mainBody}>
        <div className="ProfitSharingDiv">
          <div className="title">Profit Sharing</div>
          <ProfitSharing />
        </div>
        <div className="RetirementPlanDiv">
          <div className="title">401K</div>
          <RetirementPlan />
        </div>
      </div>
    );
  }
}

export default Home;
