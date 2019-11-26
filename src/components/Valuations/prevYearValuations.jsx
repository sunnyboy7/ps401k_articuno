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


const columns = [
  {
    id: 'empno', label: 'Emp No', align: 'left', minWidth: 150, type: 'greyColor',
  },
  {
    id: 'termdate', label: 'Term Date', align: 'left', minWidth: 150, type: 'greyColor',
  },
  {
    id: 'empcount', label: 'Emp Count', minWidth: 150, align: 'left', type: 'beginningBal',
  },
  {
    id: 'compcontrib', label: 'Comp Contrib', minWidth: 150, align: 'left', type: 'beginningBal',
  },
  {
    id: 'fundearnings', label: 'Fund Earnings', minWidth: 150, align: 'left', type: 'beginningBal',
  },
  {
    id: 'lapses', label: 'Lapses', minWidth: 150, align: 'left', type: 'beginningBal',
  },
  {
    id: 'empcontrib', label: 'Emp Contrib', minWidth: 150, align: 'left', type: 'empContrib',
  },
  {
    id: 'lapsescost', label: 'Lapses Cost', minWidth: 150, align: 'left', type: 'withdrawls',
  },
  {
    id: 'checkamount', label: 'Check Amount', minWidth: 150, align: 'left', type: 'withdrawls',
  },
  {
    id: 'earnalloc', label: 'Earn Alloc', minWidth: 150, align: 'left', type: 'allocations',
  },
  {
    id: 'classCol', label: 'Class', minWidth: 150, align: 'left', type: 'allocations',
  },
  {
    id: 'compalloc', label: 'Comp Alloc', minWidth: 150, align: 'left', type: 'allocations',
  },
  {
    id: 'lapsesalloc', label: 'Lapses Alloc', minWidth: 150, align: 'left', type: 'allocations',
  },
  {
    id: 'empamount', label: 'Emp Amount', minWidth: 150, align: 'left', type: 'endingBal',
  },
  {
    id: 'comcon', label: 'Com Con', minWidth: 150, align: 'left', type: 'endingBal',
  },
  {
    id: 'fundearn', label: 'Fund Earn', minWidth: 150, align: 'left', type: 'endingBal',
  },
];


function createData(empno, termdate, empcount, compcontrib, fundearnings,
  lapses, empcontrib, lapsescost,
  checkamount, earnalloc, classCol, compalloc, lapsesalloc,
  empamount, comcon, fundearn) {
  return {
    empno,
    termdate,
    empcount,
    compcontrib,
    fundearnings,
    lapses,
    empcontrib,
    lapsescost,
    checkamount,
    earnalloc,
    classCol,
    compalloc,
    lapsesalloc,
    empamount,
    comcon,
    fundearn,
  };
}

const rows = [
  createData(
    14,
    '',
    135.00,
    0.00,
    242.56,
    0.00,
    '',
    0.00,
    0.00,
    -6.26,
    'X',
    0.00,
    0.00,
    135.00,
    0.00,
    236.30,
  ),
  createData(
    15,
    '',
    17297.00,
    107762.27,
    760288.99,
    14952.33,
    '500',
    0.00,
    0.00,
    -14950.26,
    'D',
    4396.45,
    553.49,
    17797.11,
    112158.72,
    745338.13,
  ),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 700,
    overflow: 'auto',
    borderRadius: '5px',
  },
});

const PrevYearValuation = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Fragment>
      <div className="header-tilte">
        <span> 2018 - YEAR END VALUATIONS</span>

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
            ),
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
                      color: '#000',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  style={{
                    minWidth: 100,
                    color: '#000',
                  }}
                />
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
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} className={column.type}>
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
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Fragment>
  );
};

export default PrevYearValuation;
