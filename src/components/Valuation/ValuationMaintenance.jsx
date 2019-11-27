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
import EditLogo from '../../assets/images/Edit.png';
import Calculator from '../../assets/images/Calculater.png';
import Search from '../../assets/images/Search.png';
import Print from '../../assets/images/Print.png';
import Excel from '../../assets/images/Excel.png';
import Header from '../Header';

const columns = [
  {
    id: 'year',
    label: 'Year',
    align: 'left',
    minWidth: 50
  },
  {
    id: 'type',
    label: 'Type',
    align: 'left',
    minWidth: 85
  },
  {
    id: 'fromdate',
    label: 'From Date',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'todate',
    label: 'To Date',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'empContribution',
    label: 'Emp Contribution',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'companyContribution',
    label: 'Company Contribution',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 100,
    align: 'left'
  }
];

function createData(
  year,
  type,
  fromdate,
  todate,
  empContribution,
  companyContribution,
  total
) {
  return {
    year,
    type,
    fromdate,
    todate,
    empContribution,
    companyContribution,
    total
  };
}

const rows = [
  createData(
    '2018',
    'Interim',
    '2018-04-26',
    '2018-12-31',
    '$ 1,125.00',
    '$ 775.00',
    '$ 2,000.00'
  ),
  createData(
    '2018',
    'Interim',
    '2018-01-01',
    '2018-04-25',
    '$ 2,340.00',
    '$ 266.00',
    '$ 2,605.00'
  ),
  createData(
    '2017',
    'Year End',
    '2017-01-01',
    '2017-12-31',
    '$ 1,074.00',
    '$ 640.00',
    '$ 1,714.00'
  ),
  createData(
    '2017',
    'Interim',
    '2017-04-03',
    '2017-12-31',
    '$ 647.00',
    '$ 229.00',
    '$ 876.00'
  ),
  createData(
    '2017',
    'Interim',
    '2017-01-01',
    '2017-04-12',
    '$ 1,007.25',
    '$ 369.31',
    '$ 1,376.56'
  ),
  createData(
    '2017',
    'Interim',
    '2017-04-03',
    '2017-12-31',
    '$ 647.00',
    '$ 229.00',
    '$ 876.00'
  ),
  createData(
    '2016',
    'Year End',
    '2016-01-01',
    '2017-12-31',
    '$ 2,213.00',
    '$ 328.00',
    '$ 2,542.00'
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

const ValuationMaintenance = () => {
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
      <Header />
      <div className="mainBody">
        <div className="divTitle">
          <span>
            <b className="subtitle1">Profit Sharing</b> -{' '}
            <span className="subtitle2">Valuation Maintenance</span>
          </span>
          <div className="ExcelIcon">
            <img
              style={{
                cursor: 'pointer',
                paddingRight: '30px'
              }}
              src={Excel}
              alt=""
            />

            <img
              style={{
                cursor: 'pointer'
              }}
              src={Print}
              alt=""
            />
          </div>
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
                      backgroundColor: '#049be6',
                      minWidth: 56,
                      color: 'white'
                    }}
                  />
                  <TableCell
                    style={{
                      backgroundColor: '#049be6',
                      color: 'white',
                      minWidth: 120,
                      align: 'left'
                    }}
                  >
                    Calculate Balances
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
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
                            src={Search}
                            alt=""
                          />
                          {row.fromdate === '2018-04-26' ? (
                            <img
                              style={{
                                cursor: 'pointer',
                                paddingBottom: '4px'
                              }}
                              src={EditLogo}
                              alt=""
                            />
                          ) : (
                            ''
                          )}
                        </span>
                      </TableCell>
                      <TableCell style={{ textAlign: 'center' }}>
                        <span>
                          {row.fromdate === '2018-04-26' ? (
                            <img
                              style={{ cursor: 'pointer', align: 'center' }}
                              src={Calculator}
                              alt=""
                            />
                          ) : (
                            ''
                          )}
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
      </div>
    </Fragment>
  );
};

export default ValuationMaintenance;
