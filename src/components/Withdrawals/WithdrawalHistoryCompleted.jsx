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
import PlusLogo from '../../assets/images/Plus.png';
import EditLogo from '../../assets/images/Edit.png';
import DeleteLogo from '../../assets/images/Delete.png';

const columns = [
  {
    id: 'empId',
    label: 'Emp ID',
    align: 'left',
    minWidth: 50
  },
  {
    id: 'employeeName',
    label: 'Employee Name',
    align: 'left',
    minWidth: 85
  },
  {
    id: 'plan',
    label: 'Plan',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'seperatedDate',
    label: 'Seperated Date',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'createdDate',
    label: 'Created Date',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 100,
    align: 'left'
  }
];

function createData(
  empId,
  employeeName,
  plan,
  seperatedDate,
  createdDate,
  amount
) {
  return {
    empId,
    employeeName,
    plan,
    seperatedDate,
    createdDate,
    amount
  };
}

const rows = [
  createData(
    'E21548',
    'Aaron, John T',
    '2005 Year End(01/01/2005 to 12/31/2005)',
    '04/25/2006',
    '06/15/2019',
    '$ 4,109.62'
  ),
  createData(
    'E21548',
    'Aaron, John T',
    '2005 Year End(01/01/2005 to 12/31/2005)',
    '04/20/2016',
    '06/21/2019',
    '$ 149.23'
  ),
  createData(
    'E42587',
    'Adams, Gary L',
    '2011 Year End(01/01/2011 to 12/31/2011)',
    '04/16/2012',
    '05/07/2019',
    '$ 527.22'
  ),
  createData(
    'E54248',
    'Adams, James A',
    '2009 Year End(01/01/2009 to 12/31/2009)',
    '04/26/2010',
    '05/28/2019',
    '$ 4,447.81'
  ),
  createData(
    'E21548',
    'Aaron, John T',
    '2005 Year End(01/01/2005 to 12/31/2005)',
    '04/25/2006',
    '06/15/2019',
    '$ 4,109.62'
  ),
  createData(
    'E75548',
    'Admas, Lynett',
    '2008 Interim(01/01/2008 to 04/25/2008)',
    '04/29/2008',
    '04/01/2019',
    '$ 1,508.90'
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

const WithdrawalsHistoryCompleted = () => {
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
                    backgroundColor: '#049be6',
                    minWidth: 56,
                    color: 'white'
                  }}
                >
                  <img style={{ cursor: 'pointer' }} src={PlusLogo} alt="" />
                </TableCell>
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
                        <img
                          style={{
                            cursor: 'pointer',
                            paddingRight: '15px'
                          }}
                          src={EditLogo}
                          alt=""
                        />
                        <img
                          style={{
                            cursor: 'pointer',
                            paddingRight: '15px'
                          }}
                          src={DeleteLogo}
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

export default WithdrawalsHistoryCompleted;
