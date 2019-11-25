import React from 'react';
import style from './style.scss';
// import EmployeeMaintenance from '../../components/Employees/EmployeeMaintenance';
// import ValuationMaintenance from '../../components/Valuation/ValuationMaintenance';
import WithdrawalsHistory from '../../components/Withdrawals/WithdrawalsHistory';

class App extends React.PureComponent {
  render() {
    return (
      <div className={style.mainBody}>
        {/* <EmployeeMaintenance />
        <ValuationMaintenance /> */}
        <WithdrawalsHistory />
      </div>
    );
  }
}

export default App;
