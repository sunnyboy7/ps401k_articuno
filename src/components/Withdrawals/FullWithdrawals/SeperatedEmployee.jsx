/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SeperatedEmployeeGrid from './SeperatedEmployeeGrid';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SeperatedEmployee() {
  const classes = useStyles();
  const [plan, setPlan] = React.useState(1);

  const handleChange = event => {
    setPlan(event.target.value);
  };
  return (
    <Fragment>
      <div className="divTitle col-md-12 row">
        <div className="col-md-4 row">
          <span>
            <b className="subtitle1">Profit Sharing</b> -{' '}
            <span className="subtitle2">Seperated Employee</span>
          </span>
        </div>
        <div className="offset-md-4 col-md-4 row">
          <div className="col-md-2 font-bold">
            <label>Plan</label>
          </div>
          <div className="col-md-4" style={{ marginTop: '-6%' }}>
            <FormControl className={classes.formControl}>
              <Select
                value={plan}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>Select Plan</em>
                </MenuItem>
                <MenuItem value={1}>
                  2019 Year End(01/01/2019 to 12/31/2019)
                </MenuItem>
                <MenuItem value={2}>
                  2018 Year End(01/01/2018 to 12/31/2018)
                </MenuItem>
                <MenuItem value={3}>
                  2019 Year End(01/01/2017 to 12/31/2017)
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="col-md-12 row">
        <div className="offset-md-4 col-md-8 row WH_border">
          <div className="col-md-2 font-bold">
            <label>Employee</label>
          </div>
          <div className="col-md-3">
            <input type="text" />
          </div>
          <div className="col-md-2">
            <input type="button" value="Search" className="btn btn-success " />
          </div>
          <div className="offset-md-2 col-md-2">
            <input
              type="button"
              value="Calculate Withdrawals"
              className="btn btn-primary "
            />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '25px' }}>
        <SeperatedEmployeeGrid />
      </div>
    </Fragment>
  );
}
