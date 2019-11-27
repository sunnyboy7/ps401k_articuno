import React, { Fragment } from 'react';
import ContributionValuations from './ContributionValuations';
import PrevYearValuations from './PrevYearValuations';
import Header from '../Header';

class EditValuation extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="mainBody">
          <ContributionValuations />
          <PrevYearValuations />
        </div>
      </Fragment>
    );
  }
}
export default EditValuation;
