import React from 'react';
import style from './style.scss';
import EmployeeMaintenance from '../../components/Employees/EmployeeMaintenance';
import ValuationMaintenance from '../../components/Valuation/ValuationMaintenance';

class App extends React.PureComponent {
  render() {
    return (
      <div className={style.mainBody}>
        <EmployeeMaintenance />
        <ValuationMaintenance />
      </div>
    );
  }
}

export default App;
