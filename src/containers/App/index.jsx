import './style.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../components/Login/LoginPage';
import Home from '../../components/Home';
import EditValuation from '../../components/Valuation/EditValuation';
import EmployeeMaintenance from '../../components/Employees/EmployeeMaintenance';
import ValuationMaintenance from '../../components/Valuation/ValuationMaintenance';

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Valuations" component={EditValuation} />
        <Route path="/EmployeeMaintenance" component={EmployeeMaintenance} />
        <Route path="/ValuationMaintenance" component={ValuationMaintenance} />
      </Switch>
    );
  }
}

export default App;
