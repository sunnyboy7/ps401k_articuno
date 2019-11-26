import React, { Fragment } from 'react';

class ContributionValuations extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div className="divTitle">
          <span>
            <b className="subtitle1">Profit Sharing</b>
            {' '}
-
            {' '}
            <span className="subtitle2">Valuations</span>
            {' '}
-
            {' '}
            <span className="subtitle2">Edit</span>
          </span>
        </div>
        <div className="coursoul-main-div">
          <div className="coursoul-header-div blue-color">Edit Valuations</div>
          <div className="coursoul-body-div">
            <div className="row coursoul-inner-row-div">
              <div className="col-sm-2">Year</div>
              <div className="col-sm-2">
                <select className="valuation-drop default-drop margin-left-right-15">
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                </select>
              </div>
              <div className="col-sm-2"> From Date</div>
              <div className="col-sm-2">
                <input type="date" value="12/05/2012" className="form-control-tiny" />
              </div>
              <div className="col-sm-2"> Through Date</div>
              <div className="col-sm-2">
                <input type="date" value="12/05/2012" className="form-control-tiny" />
              </div>
            </div>
            <div className="row coursoul-inner-row-div">
              <div className="col-sm-2">
                Valuation Type
                <span className="required">*</span>
              </div>
              <div className="col-sm-10">
                <input type="radio" name="ValuationType" />
                <span className="pad-left-10">Interim</span>
                <span className="pad-left-10"> </span>
                <input type="radio" name="ValuationType" />
                <span className="pad-left-10">Year End</span>
              </div>
            </div>
          </div>
          <div className="coursoul-header-div Contribution-Details">
            <span className="subHeader">CONTRIBUTION DETAILS</span>
            <span className="contribution">
              Total Conribution
              {' '}
              <span className="pad-left-10">$ 59477.93</span>
            </span>
          </div>
          <div className="coursoul-body-div">
            <div className="row coursoul-inner-row-div">
              <div className="col-sm-2">Employee Contribution</div>
              <div className="col-sm-2">
                <input type="text" value="$59477.93" className="form-control-tiny" />
              </div>
              <div className="col-sm-2"> Plan Earnings</div>
              <div className="col-sm-2">
                <input type="text" value="0.00" className="form-control-tiny" />
              </div>
              <div className="col-sm-2"> Company Contribution</div>
              <div className="col-sm-2">
                <input type="text" value="0.00" className="form-control-tiny" />
              </div>
            </div>
            <div className="row coursoul-inner-row-div">
              <div className="col-sm-2">
                Allow Calculation
                <span className="required">*</span>
              </div>
              <div className="col-sm-2">
                <input type="checkbox" />
              </div>
              <div className="col-sm-2">
                Last Date Extract
              </div>
              <div className="col-sm-2">
                <span>01/10/2018 10:15 AM</span>
              </div>
            </div>
          </div>
          <div className="row text-center buttons-div">
            <input type="button" value="Save" className="btn default-btn" />
            <input type="button" value="Cancel" className="btn default-btn" />
            <input
              type="button"
              value="Calculate"
              className="btn default-btn blueColor"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ContributionValuations;
