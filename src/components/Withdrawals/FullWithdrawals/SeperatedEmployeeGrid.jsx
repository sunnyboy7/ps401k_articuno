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
import Checkbox from '@material-ui/core/Checkbox';
// import PlusLogo from '../../assets/images/Plus.png';
// import EditLogo from '../../assets/images/Edit.png';
// import DeleteLogo from '../../assets/images/Delete.png';

const columns = [
  {
    id: 'empId',
    label: 'Emp ID',
    align: 'left',
    minWidth: 50
  },
  {
    id: 'name',
    label: 'Name',
    align: 'left',
    minWidth: 85
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'state',
    label: 'State',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'zip',
    label: 'Zip',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'seperationDate',
    label: 'Seperation Date',
    minWidth: 100,
    align: 'left'
  }
];

function createData(empId, name, address, city, state, zip, seperationDate) {
  return {
    empId,
    name,
    address,
    city,
    state,
    zip,
    seperationDate
  };
}

const rows = [
  createData(
    'E21548',
    'Aaron, John T',
    '10142 Southridge Dr',
    'Oklahoma city',
    'OK',
    '73159',
    '06/01/2019'
  ),
  createData(
    'E54578',
    'Aaron, Nicholas N',
    '116 Sw 30th St',
    'Oklahoma city',
    'OK',
    '73151',
    '06/15/2019'
  ),
  createData(
    'E42587',
    'Aaron, Zachary A',
    '11805 Skyway Ave',
    'Oklahoma city',
    'OK',
    '73162',
    '06/21/2019'
  ),
  createData(
    'E54248',
    'Adams, John A',
    '1700 Nw 177th Terr',
    'Ebmond',
    'OK',
    '73012',
    '05/07/2019'
  ),

  createData(
    'E21546',
    'Aaron David S',
    '2338 S W 74th #210',
    'Oklahoma city',
    'OK',
    '73151',
    '04/09/2019'
  ),
  createData(
    'E54578',
    'Aaron, Nicholas N',
    '116 Sw 30th St',
    'Oklahoma city',
    'OK',
    '73151',
    '06/15/2019'
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

const SeperatedEmployeeGrid = () => {
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
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    backgroundColor: '#049be6',
                    minWidth: 56,
                    color: 'white'
                  }}
                >
                  <Checkbox value="checkedB" color="primary" />
                </TableCell>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>
                      <Checkbox value="checkedB" color="primary" />
                    </TableCell>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
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

export default SeperatedEmployeeGrid;
