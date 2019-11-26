import React from 'react';
import ContributionValuations from './contributionValuations';
import PrevYearValuations from './prevYearValuations';

class EditValuation extends React.PureComponent {
  render() {
    return (
      <div className="ValuationsEdit">
        <ContributionValuations />
        <PrevYearValuations />
      </div>
    );
  }
}
export default EditValuation;
