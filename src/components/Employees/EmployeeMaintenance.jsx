/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/images/Edit.png';
import CashIcon from '../../assets/images/Cash-icon.png';

const columns = [
  {
    id: 'name',
    label: 'Name',
    align: 'left',
    minWidth: 150
  },
  {
    id: 'address',
    label: 'Address',
    align: 'left',
    minWidth: 150
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 150,
    align: 'left'
  },
  {
    id: 'state',
    label: 'State',
    minWidth: 120,
    align: 'left'
  },
  {
    id: 'zip',
    label: 'Zip',
    minWidth: 120,
    align: 'left'
  },
  {
    id: 'store',
    label: 'Store',
    minWidth: 100,
    align: 'left'
  }
];

function createData(name, address, city, state, zip, store, action) {
  return {
    name,
    address,
    city,
    state,
    zip,
    store,
    action
  };
}

const rows = [
  createData(
    'Aaron, John T',
    '10142 Southridge Dr',
    'Oklahoma City',
    'Ok',
    73151,
    80
  ),
  createData(
    'Aaron, Nicholas N',
    '116 Sw 30th st',
    'Oklahoma City',
    'Ok',
    73109,
    92
  ),
  createData(
    'Aaron, Zachary A',
    '11805 Skyway Ave',
    'Oklahoma City',
    'Ok',
    73162,
    906
  ),
  createData('Abakah, John H', '1700 Nw 177th Terr', 'Ebmond', 'Ok', 73012, 99),
  createData(
    'Abbe, pamela S',
    '1601 S Shepard Ave',
    'El Reno',
    'Ok',
    73036,
    69
  ),
  createData(
    'Abbey, Carolyn J',
    '7528 Lyrewood Ln #387',
    'Oklahoma City',
    'Ok',
    93132,
    99
  ),
  createData(
    'Aaron David S',
    '2338 S W 74th #210',
    'Oklahoma City',
    'Ok',
    73151,
    29
  ),
  createData(
    'Abott, MeganE',
    '1809 Goldenrod Ln',
    'Midwest City',
    'Ok',
    73130,
    47
  )
];

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  tableWrapper: {
    maxHeight: 700,
    overflow: 'auto',
    borderRadius: '5px'
  }
});

const Employees = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Fragment>
      <div className="divTitle">
        <span>
          <b className="subtitle1">Profit Sharing</b>-{' '}
          <span className="subtitle2">Employee Maintenance</span>
        </span>
        {/* <span>
            <input
              className='searchBar'
              type='text'
              name='text'
              placeholder='Search'
            />
          </span> */}
        <TextField
          className="searchBar"
          id="standard-input"
          placeholder="Search"
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>

      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: '#049be6',
                      color: 'white'
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  style={{
                    minWidth: 100,
                    backgroundColor: '#049be6',
                    color: 'white'
                  }}
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <span>
                        <img style={{ cursor: 'pointer' }} src={Logo} alt="" />
                        <img
                          style={{ marginLeft: '18px', cursor: 'pointer' }}
                          src={CashIcon}
                          alt=""
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page'
          }}
          nextIconButtonProps={{
            'aria-label': 'next page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Fragment>
  );
};

export default Employees;
