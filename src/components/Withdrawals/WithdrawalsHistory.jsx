/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import { Row, Form } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import WithdrawalsHistoryCompleted from './WithdrawalHistoryCompleted';

class WithdrawalsHistory extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div className="divTitle">
          <span>
            <b className="subtitle1">Profit Sharing</b> -{' '}
            <span className="subtitle2">Withdrawals History</span>
          </span>
        </div>

        <Form>
          <div className="WH_border">
            <Row className="WH_innerDiv">
              <div className="col-md-4 row">
                <div className="col-md-5 font-bold">
                  <label>From Date</label>
                </div>
                <div className="col-md-7">
                  <input type="date" />
                </div>
              </div>

              <div className="col-md-4 row">
                <div className="col-md-5 font-bold">
                  <label>To Date</label>
                </div>
                <div className="col-md-7">
                  <input type="date" />
                </div>
              </div>

              <div className="col-md-4 row">
                <div className="col-md-5 font-bold">
                  <label>Employee</label>
                </div>
                <div className="col-md-7">
                  <input type="text" />
                </div>
              </div>
            </Row>

            <Row className="WH_innerDiv">
              <div className="col-md-4 row">
                <div className="col-md-5 font-bold">
                  <label>Withdrawl Type</label>
                </div>
                <div className="col-md-7">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="All"
                      name="WithdrawlType"
                      value="All"
                    />
                    <label htmlFor="All">All</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="Interim"
                      name="WithdrawlType"
                      value="Interim"
                      checked
                    />
                    <label htmlFor="Interim">Interim</label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="seperatedEmp"
                      name="WithdrawlType"
                      value="seperatedEmployees"
                    />
                    <label htmlFor="seperatedEmp">Seperated Employees</label>
                  </div>
                </div>
              </div>
              <div className="offset-md-6 col-md-2 row">
                <input
                  type="button"
                  value="Search"
                  className="btn btn-success WH_searchBtn"
                />
              </div>
            </Row>
          </div>
        </Form>

        <div className="WH_Tabs">
          <Tabs defaultActiveKey="completed" id="uncontrolled-tab-example">
            <Tab eventKey="completed" title="Completed">
              <div style={{ paddingTop: '20px' }} />
              <WithdrawalsHistoryCompleted />
            </Tab>
            <Tab eventKey="pendings" title="Pendings" />
          </Tabs>
        </div>
      </Fragment>
    );
  }
}
export default WithdrawalsHistory;
