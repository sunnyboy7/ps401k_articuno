import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import employeeLogo from '../../assets/images/Employee.png';
import balanceLogo from '../../assets/images/Balance.png';
import employeesListLogo from '../../assets/images/HCEEmployees.png';

class Employees extends React.PureComponent {
  render() {
    const { type } = this.props;
    return (
      <div className="cards">
        <span className="card-header-title">Empolyees</span>
        <div className="card-tab">
          <div className="card">
            <div className="card-body">
              <Link to="/Employees">
                <img src={employeeLogo} className="card-img-top" alt="" />
                <p className="card-text employees-list">Employees List</p>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={balanceLogo} className="card-img-top" alt="" />
              <p className="card-text balances-edit">Balances Edit</p>
            </div>
          </div>
          {type === '401K' && (
            <div className="card">
              <div className="card-body">
                <img src={employeesListLogo} className="card-img-top" alt="" />
                <p className="card-text balances-edit">HCE Employees List</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
Employees.propTypes = {
  type: PropTypes.string.isRequired
};
export default Employees;
